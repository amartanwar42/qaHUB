const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        console.log(`user ${profile.id} already exists`);
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName,
          emailId: profile._json.email,
          imageLink: profile._json.picture,
          createdDate: Date.now(),
          lastUpdatedDate: Date.now()
        }).save();
        done(null, user);
      }
    }
  )
);
