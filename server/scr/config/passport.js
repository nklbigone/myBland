import { Strategy as localStrategy } from "passport-local";
import { compare } from "bcryptjs";
import dotenv from "dotenv";
// load User model

const User = require("../models/User");
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
export default function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user || !(await compare(password, user.password)))
            return done(null, false);
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      console.log(payload);
      done(null, payload);
    })
  );
}
