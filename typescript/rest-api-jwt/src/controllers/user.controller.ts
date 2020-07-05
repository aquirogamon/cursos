import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
  return jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    config.jwtSecrect,
    {
      expiresIn: 86400
    }
  );
}
export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);
  if (!req.body.email || !req.body.password || !req.body.username) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }
  const email = await User.findOne({ email: req.body.email });
  const username = await User.findOne({ username: req.body.username });
  console.log(email, username);
  if (email) {
    return res.status(400).json({ smg: "The email already exists" });
  } else if (username) {
    return res.status(400).json({ smg: "The username already exists" });
  }
  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.password || !req.body.username) {
    return res
      .status(400)
      .json({ msg: "Please. Send your username and password" });
  }
  const username = await User.findOne({ username: req.body.username });
  if (!username) {
    return res.status(400).json({ msg: "The user does not exists" });
  }
  const isMatch = await username.comparePassword(req.body.password);
  if (isMatch) {
    return res.status(200).json({ token: createToken(username) });
  }
  return res
    .status(400)
    .json({ msg: "The username or password are incorrect" });
};
