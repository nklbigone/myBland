import passport from 'passport'

class Authentications {
  static login(req, res, next) {
    passport.authenticate("local", {
      session: false,
    })(req, res, next);
  }

  static checkAuth(req, res, next) {
    passport.authenticate("jwt", {
      session: false,
    })(req, res, next);
  }
}

export default Authentications