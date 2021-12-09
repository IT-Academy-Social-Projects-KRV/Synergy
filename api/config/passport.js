const passportJWT = require('passport-jwt');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;
const { User } = require('../src/models/models');

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  const user = User.findOne({ id: jwt_payload.id });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
});

module.exports = (passport) => {
  passport.use(strategy);
};
