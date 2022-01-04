import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../src/models/modelsAssociations';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const strategy = new Strategy(jwtOptions, (jwtPayload, done) => {
  const user = User.findOne({ id: jwtPayload.id });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
});

export default (passport) => {
  passport.use(strategy);
};
