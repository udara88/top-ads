import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import { saveLogInfo } from "../middlewares/users/logger/logInfo.js";
import jwt from "jsonwebtoken";
import Token from "../models/token.model.js";

const LOG_TYPE = {
  SIGN_IN: "sign in",
  LOGOUT: "logout",
};

const LEVEL = {
  INFO: "info",
  ERROR: "error",
  WARN: "warn",
};

const MESSAGE = {
  SIGN_IN_ATTEMPT: "User attempting to sign in",
  SIGN_IN_ERROR: "Error occurred while signing in user: ",
  INCORRECT_EMAIL: "Incorrect email",
  INCORRECT_PASSWORD: "Incorrect password",
  DEVICE_BLOCKED: "Sign in attempt from blocked device",
  CONTEXT_DATA_VERIFY_ERROR: "Context data verification failed",
  MULTIPLE_ATTEMPT_WITHOUT_VERIFY:
    "Multiple sign in attempts detected without verifying identity.",
  LOGOUT_SUCCESS: "User has logged out successfully",
};

export const signin = async (req, res, next) => {
  await saveLogInfo(
    req,
    "user attempting to sign in",
    LOG_TYPE.SIGN_IN,
    LEVEL.INFO
  );

  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser)
    if (!existingUser) {
      await saveLogInfo(
        req,
        MESSAGE.INCORRECT_EMAIL,
        LOG_TYPE.SIGN_IN,
        LEVEL.ERROR
      );

      return res.status(404).json(errorHandler(404, "Invalid credentials "));
    }

    if (!existingUser.isAuthenticated) {
      res.status(400).json(errorHandler(400, "User is not authenticated."));
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      await saveLogInfo(
        req,
        MESSAGE.INCORRECT_PASSWORD,
        LOG_TYPE.SIGN_IN,
        LEVEL.ERROR
      );

      res.status(400).json(errorHandler(400, "Invalid credentials"));
    }

    const payload = {
      id: existingUser._id,
      email: existingUser.email,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30s",
    });

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const newRefreshToken = new Token({
      user: existingUser._id,
      accessToken,
      refreshToken,
    });
    await newRefreshToken.save();
     res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'None',secure:true,maxAge:24*60*60*1000})
     res.status(200).json({
      accessToken,
      refreshToken,
      accessTokenUpdatedAt: new Date().toLocaleString(),
      user: {
        _id: existingUser._id,
        firstname: existingUser.firstname || "",
        lastname: existingUser.lastname || "",
        mobile: existingUser.mobilenumber || "",
        isAuthenticated: existingUser.isAuthenticated || false,
        imageUrl:existingUser.imageUrl || ""
      },
    });
  } catch (error) {
    await saveLogInfo(
      req,
      MESSAGE.SIGN_IN_ERROR + error.message,
      LOG_TYPE.SIGN_IN,
      LEVEL.ERROR
    );
  }
};
export const addUser = async (req, res, next) => {
  const { firstname, lastname, mobilenumber, email, password } = req.body;
  console.log(password);

  let newUser;
  const hashedPassword = await bcrypt.hash(password, 10);
  const defaultAvatar =
    "https://raw.githubusercontent.com/nz-m/public-files/main/dp.jpg";

  newUser = new User({
    firstname,
    lastname,
    mobilenumber,
    email,
    password: hashedPassword,
    imageUrl: defaultAvatar,
    isAuthenticated: false,
  });

  try {
    await newUser.save();
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json(errorHandler(400, "Failed to add user"));
  }
};

export const getUser = async (req,res,next)=>{
  const {email} = req.query;
  const user = await User.findOne({ email: email });
  if (!user) {
    await saveLogInfo(
      req,
      MESSAGE.INCORRECT_EMAIL,
      LOG_TYPE.SIGN_IN,
      LEVEL.ERROR
    );

    return res.status(404).json(errorHandler(404, "No user exsist"));
  }

  res.status(200).json({
    user: {
      _id: user._id,
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      mobile: user.mobile || "",
      isAuthenticated: user.isAuthenticated || false,
      imageUrl:user.imageUrl || ""
    },
  });
}
