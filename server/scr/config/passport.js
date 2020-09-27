import { Strategy as localStrategy } from 'passport-local';
import { compare } from 'bcryptjs';
import dotenv from 'dotenv'
// load User model

const User = require ('../models/User');
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

dotenv.config()

const opts = {
jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: process.env.JWT_SECRET
}
export default function(passport){
    passport.use(
        new localStrategy( { usernameField: 'email'}, (email, password, done) => {
            // Match User
            User.findOne({ email: email})
            .then(user => {
                if(!user){
                    return done(null, false, {message: ' that email is not registered.'})
                }

                // Match Password

                compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null, user);
                    }else{
                        return(done(null, false, {message: 'Password Incorrect'}))
                    }

                })
            })
            .catch(err => console.log(err));
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });

      passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}


