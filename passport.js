import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controller/userController";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: GH_ID,
    clientSecret: GH_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/github/callback`
  },
  function(accessToken, refreshToken, profile, cb) {
      // USER가 Github를 갔다가 정보를 가지고 돌아왔을 때 실행되는 함수 
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });,
    githubLoginCallback
  }

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
