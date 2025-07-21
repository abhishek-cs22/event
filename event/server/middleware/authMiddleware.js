import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protect = async (req, res, next) => {
  let token

  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1]
      console.log("🔑 Token received:", token ? "Present" : "Missing")

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log("✅ Token decoded successfully:", decoded.id)

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password")

      if (!req.user) {
        console.log("❌ User not found for token")
        return res.status(401).json({ message: "Not authorized, user not found" })
      }

      console.log("✅ User authenticated:", req.user.username)
      next()
    } catch (error) {
      console.error("❌ Auth middleware error:", error.message)
      return res.status(401).json({ message: "Not authorized, invalid token" })
    }
  } else {
    console.log("❌ No token provided")
    return res.status(401).json({ message: "Not authorized, no token provided" })
  }
}
