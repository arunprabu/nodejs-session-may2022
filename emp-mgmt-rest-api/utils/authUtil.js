const { expressjwt: jwt } = require("express-jwt");

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;
  
  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'NodeJS is wonderful',
    algorithms: ["HS256"],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: true,
  }),
  optional: jwt({
    secret: 'NodeJS is wonderful',
    algorithms: ["HS256"],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  })
};

module.exports = auth;