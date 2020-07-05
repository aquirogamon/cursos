import { Strategy } from "passport-facebook";
import config from "../config/config";
import UserFacebook from "../models/userFacebook";
import passport from "./passport";

const FacebookStrategy = Strategy;
const fbOps = {
  clientID: config.facebookSecrect.facebookClientID,
  clientSecret: config.facebookSecrect.facebookClientSecrect,
  callbackURL: "/auth/facebook/callback",
  profileFields: ["id", "displayName", "email"]
};

export default new FacebookStrategy(fbOps, function(
  accessToken,
  refreshToken,
  profile,
  done
) {
  console.log("accessToken: ", accessToken);
  console.log("refreshToken: ", refreshToken);
  console.log("profile: ", profile);
  const newUserFacebook = {
    facebookID: profile._json.id,
    displayName: profile._json.name,
    email: profile._json.email
  };
  UserFacebook.findById({
    facebookID: profile._json.id
  }).then(userFacebook => {
    if (userFacebook) {
      done(null, userFacebook);
    } else {
      new UserFacebook(newUserFacebook)
        .save()
        .then(userFacebook => done(null, userFacebook));
    }
  });
});
