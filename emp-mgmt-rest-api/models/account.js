// Let's have the schema created
// importing connection stuff 
const mongoose = require('./mongo');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Schema 
const Schema = mongoose.Schema;

// building a collection with field and datatype 
const Account = new Schema({
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  salt: String,
  hash: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now },
}, {
  strict: true
});

// define util fn around Account model 
//converting p/w to salt and hash 
Account.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 9876, 512, 'sha512').toString('hex');
}

// validating the password to return true or false
Account.methods.validatePassword = function(password){
  // 
  console.log(password);
  console.log(this.salt);
  console.log(this.hash);
  const hash = crypto.pbkdf2Sync(password, this.salt, 9876, 512, 'sha512').toString('hex');
  return this.hash === hash;
}

// generating JWT
Account.methods.generateJWT = function(){
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  }, 'NodeJS is wonderful');

}

module.exports = mongoose.model('Account', Account);
