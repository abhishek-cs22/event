import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import venueRoutes from "./routes/venueRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

// Connect to database
connectDB()

const app = express()

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // React app URL
    credentials: true,
  }),
)

// Body parser middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// Serve static files (uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/venues", venueRoutes)
app.use("/api/bookings", bookingRoutes)

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "Eventopia API is running!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err)
  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.path} not found` })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`)
  console.log(`🔗 API URL: http://localhost:${PORT}`)
})
