import User from "../models/user.model.js";
import Token from "../models/token.model.js";



export const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshtoken = cookies.jwt;

  const foundToken = await Token.findOne({
    refreshToken: refreshtoken,
  });

  const user = await User.findOne({
    _id: foundToken.user,
    isAuthenticated: true,
  });

  if (!foundToken) {
    res.clearCookie("jwt", { httpOnly: true  });
    return res.sendStatus(204);
  }
  
  if (user) {
   
  const u =  await Token.deleteOne({
      user: user._id.toString(),
    });

    console.log(u);
  }
  res.clearCookie("jwt", { httpOnly: true  });
  res.sendStatus(204);
};
