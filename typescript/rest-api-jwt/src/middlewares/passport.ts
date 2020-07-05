import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/user";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecrect
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (user) {
      return done(null, user);
    }
  } catch (error) {
    console.log(error);
  }
});
