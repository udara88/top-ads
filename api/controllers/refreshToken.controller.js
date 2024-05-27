import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
import Token from "../models/token.model.js";

dotenv.config();

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
 
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshtoken = cookies.jwt;
  const foundToken = await Token.findOne({
    refreshToken: refreshtoken,
  });

  const user = await User.findOne({
    _id: foundToken.user,
    isAuthenticated: true,
  });

  if (!foundToken) return res.sendStatus(403);

  jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundToken.user.toString() !== decoded.id)
      return res.sendStatus(403);
    const payload = {
      id: user._id,
      email: user.email,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30s",
    });

    res.status(200).json({
      accessToken,
      accessTokenUpdatedAt: new Date().toLocaleString(),
    });
  });
};
