import Venue from "../models/Venue.js"

export const getVenues = async (req, res) => {
  try {
    console.log("🔍 Fetching venues from database...")
    const venues = await Venue.find({})
    console.log(`📊 Found ${venues.length} venues`)

    if (venues.length === 0) {
      console.log("⚠️ No venues found in database")
    }

    res.json(venues)
  } catch (error) {
    console.error("❌ Get venues error:", error)
    res.status(500).json({ message: "Error fetching venues", error: error.message })
  }
}

export const getVenueById = async (req, res) => {
  try {
    console.log(`🔍 Fetching venue with ID: ${req.params.id}`)
    const venue = await Venue.findById(req.params.id)

    if (!venue) {
      console.log("⚠️ Venue not found")
      return res.status(404).json({ message: "Venue not found" })
    }

    console.log(`✅ Found venue: ${venue.name}`)
    res.json(venue)
  } catch (error) {
    console.error("❌ Get venue error:", error)
    res.status(500).json({ message: "Error fetching venue", error: error.message })
  }
}
