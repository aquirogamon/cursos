import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUserFacebook extends Document {
  username: string;
  email: string;
  password: string;
}

const userFacebookSchema = new Schema({
  facebookID: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

export default model<IUserFacebook>("UserFacebook", userFacebookSchema);
