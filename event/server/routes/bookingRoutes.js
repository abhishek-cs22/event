import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { createBooking, getUserBookings } from "../controllers/bookingController.js"

const router = express.Router()

// Debug middleware to log all booking requests
router.use((req, res, next) => {
  console.log(`🔄 Booking route: ${req.method} ${req.path}`)
  console.log("📋 Request body:", req.body)
  console.log("🔑 Authorization header:", req.headers.authorization ? "Present" : "Missing")
  next()
})

router.post("/", protect, createBooking)
router.get("/my-bookings", protect, getUserBookings)

export default router
