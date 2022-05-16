const passport = require('passport');
const Account = require("../models/account");

//signup 
exports.signup = (req, res) => {
  console.log(req);
  
  // generate salt and hash for the password 
  // remove the password 
  // then, create the account
  
  const accountDao = new Account(req.body);
  accountDao.setPassword(req.body.password);
  console.log(accountDao);
  // TODO: now delete the password from the dao - how to remove prop from obj
  accountDao.save( (err, data) => {
    if(!err){
      console.log(data);
      res.send({status: 'Account Created Successfully! '});

      // if you want to send email to verify email -- do it here
      // refer sendgrid package 
    }else{
      console.log(err);
      res.send(err);
    }
  })
}

// login 
exports.login = (req, res) => {
  console.log(req);

  // password should be decrypted and verified 
  // if valid, token should be generated 

  passport.authenticate('local', function(err, account, info) {
    // if passport throws any err
    if(err){
      res.send(err);
    }

    // if account found
    if(account){
      // let's generate token 
      const authToken = account.generateJWT()
      res.send({status: 'Loggedin Successfully!', token: authToken});
    }else{
      res.send(info);
    }

  })(req, res);
}

