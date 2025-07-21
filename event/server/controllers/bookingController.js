import Booking from "../models/Booking.js"
import Venue from "../models/Venue.js"

export const createBooking = async (req, res) => {
  try {
    console.log("📝 Creating booking with data:", req.body)
    console.log("👤 User:", req.user?.username, req.user?._id)

    const { venueId, occasion, numberOfPeople, date, services, paymentMethod, specialRequests } = req.body

    // Validate required fields
    if (!venueId || !occasion || !numberOfPeople || !date || !paymentMethod) {
      console.log("❌ Missing required fields")
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        required: ["venueId", "occasion", "numberOfPeople", "date", "paymentMethod"],
        received: { venueId, occasion, numberOfPeople, date, paymentMethod },
      })
    }

    // Get venue details for pricing
    const venue = await Venue.findById(venueId)
    if (!venue) {
      console.log("❌ Venue not found:", venueId)
      return res.status(404).json({
        success: false,
        message: "Venue not found",
      })
    }

    console.log("✅ Venue found:", venue.name)

    // Validate number of people doesn't exceed capacity
    if (numberOfPeople > venue.capacity) {
      return res.status(400).json({
        success: false,
        message: `Number of people (${numberOfPeople}) exceeds venue capacity (${venue.capacity})`,
      })
    }

    // Validate date is in the future
    const eventDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (eventDate < today) {
      return res.status(400).json({
        success: false,
        message: "Event date must be in the future",
      })
    }

    // Calculate total amount (base price + services)
    let totalAmount = venue.price
    const serviceCharges = (services?.length || 0) * 5000 // ₹5000 per additional service
    totalAmount += serviceCharges

    console.log("💰 Pricing calculation:", {
      basePrice: venue.price,
      services: services?.length || 0,
      serviceCharges,
      totalAmount,
    })

    // Generate transaction ID
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create booking with new structure
    const bookingData = {
      user: req.user._id,
      venue: venueId,
      occasion,
      numberOfPeople: Number.parseInt(numberOfPeople),
      date: eventDate,
      services: services || [],
      totalAmount,
      paymentDetails: {
        method: paymentMethod,
        transactionId,
        paymentStatus: "Completed", // Simulating successful payment
        paidAmount: totalAmount,
      },
      bookingStatus: "Confirmed",
      specialRequests: specialRequests || "",
      // Old field for backward compatibility
      paymentStatus: true,
    }

    console.log("📋 Creating booking with data:", bookingData)

    const booking = await Booking.create(bookingData)
    console.log("✅ Booking created successfully:", booking._id)

    // Populate venue and user details for response
    const populatedBooking = await Booking.findById(booking._id)
      .populate("venue", "name location image")
      .populate("user", "username email")

    res.status(201).json({
      success: true,
      message: "Booking confirmed successfully!",
      booking: populatedBooking,
    })
  } catch (error) {
    console.error("❌ Booking creation error:", error)
    console.error("Stack trace:", error.stack)

    // Handle specific MongoDB errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors,
      })
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate booking detected",
      })
    }

    res.status(500).json({
      success: false,
      message: "Error creating booking",
      error: error.message,
      details: process.env.NODE_ENV === "development" ? error.stack : undefined,
    })
  }
}

export const getUserBookings = async (req, res) => {
  try {
    console.log("📋 Fetching bookings for user:", req.user._id)

    const bookings = await Booking.find({ user: req.user._id })
      .populate("venue", "name location image")
      .sort({ createdAt: -1 })

    console.log("✅ Found bookings:", bookings.length)
    res.json({
      success: true,
      bookings,
    })
  } catch (error) {
    console.error("❌ Get bookings error:", error)
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
    })
  }
}
