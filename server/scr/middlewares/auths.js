import passport from 'passport'

class Authentications {
  static login(req, res, next) {
    passport.authenticate("local", {
      session: false,
    })(req, res, next);
  }

  static checkAuth(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      console.log(err,user)
      if (err) return res.status(401).json({message: "Unthorized"})
      req.user = user;
      return next();
    })(req, res, next);
  }
}

export default Authentications