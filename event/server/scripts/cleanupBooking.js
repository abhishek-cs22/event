// Run this script to clean up old booking format and migrate to new structure
// node scripts/cleanupBookings.js

import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, "..", ".env") })

console.log("🔧 Environment check:")
console.log("MONGO_URI:", process.env.MONGO_URI)

async function cleanupBookings() {
  try {
    console.log("🔄 Connecting to MongoDB...")

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("✅ Connected to MongoDB")

    // Delete all existing bookings to start fresh
    const result = await mongoose.connection.db.collection("bookings").deleteMany({})
    console.log(`🗑️ Deleted ${result.deletedCount} old bookings`)

    console.log("✅ Cleanup completed successfully!")
    process.exit(0)
  } catch (error) {
    console.error("❌ Error during cleanup:", error)
    process.exit(1)
  }
}

cleanupBookings()
