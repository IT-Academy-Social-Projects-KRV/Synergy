const passportJWT = require('passport-jwt');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;
const { User } = require('../src/models/modelsAssociations');

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  const user = User.findOne({ id: jwtPayload.id });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
});

module.exports = (passport) => {
  passport.use(strategy);
};
