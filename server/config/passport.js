const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRETORKEY
};

const getUserById = (id, jwt, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => done(err, null));
};

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(getUserById);

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      getUserById(jwt_payload.id, jwt_payload, done);
    })
  );
};
