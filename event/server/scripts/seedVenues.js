// Run this script to add sample venues to your database
// node scripts/seedVenues.js

import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from the parent directory
dotenv.config({ path: path.join(__dirname, "..", ".env") })

console.log("🔧 Environment check:")
console.log("MONGO_URI:", process.env.MONGO_URI)
console.log("PORT:", process.env.PORT)

const venueSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    services: [String],
    price: Number,
    image: String,
    description: String,
    capacity: Number,
    amenities: [String],
  },
  {
    timestamps: true,
  },
)

const Venue = mongoose.model("Venue", venueSchema)

const sampleVenues = [
  {
    name: "Grand Palace Ballroom",
    location: "Mumbai, Maharashtra",
    services: ["Catering", "Decoration", "Music System", "Parking"],
    price: 150000,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
    description: "Elegant ballroom perfect for grand celebrations with stunning architecture and premium amenities.",
    capacity: 500,
    amenities: ["AC", "Stage", "Sound System", "Lighting", "Valet Parking"],
  },
  {
    name: "Royal Garden Resort",
    location: "Goa",
    services: ["Catering", "Photography", "Live Music", "Accommodation"],
    price: 200000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    description: "Beautiful beachside resort perfect for destination weddings with ocean views and tropical gardens.",
    capacity: 300,
    amenities: ["Beach Access", "Pool", "Garden", "Spa", "Restaurant"],
  },
  {
    name: "Elegant Banquet Hall",
    location: "Delhi",
    services: ["Catering", "Decoration", "DJ", "Valet Parking"],
    price: 120000,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    description: "Modern banquet hall in the heart of Delhi with contemporary design and excellent connectivity.",
    capacity: 400,
    amenities: ["Parking", "AC", "Kitchen", "Bridal Room", "WiFi"],
  },
  {
    name: "Seaside Wedding Venue",
    location: "Chennai, Tamil Nadu",
    services: ["Catering", "Beach Setup", "Photography", "Music"],
    price: 180000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    description: "Romantic seaside venue with breathtaking ocean views and sunset ceremonies.",
    capacity: 250,
    amenities: ["Beach Access", "Sunset View", "Outdoor Setup", "Gazebo", "Bonfire Area"],
  },
  {
    name: "Heritage Palace",
    location: "Jaipur, Rajasthan",
    services: ["Traditional Catering", "Cultural Programs", "Photography", "Accommodation"],
    price: 250000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    description: "Royal heritage palace offering traditional Rajasthani hospitality and regal celebrations.",
    capacity: 600,
    amenities: ["Palace Rooms", "Courtyard", "Traditional Decor", "Cultural Shows", "Royal Dining"],
  },
  {
    name: "Mountain View Resort",
    location: "Shimla, Himachal Pradesh",
    services: ["Catering", "Adventure Activities", "Photography", "Accommodation"],
    price: 175000,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    description: "Scenic mountain resort perfect for intimate gatherings with panoramic Himalayan views.",
    capacity: 200,
    amenities: ["Mountain View", "Fireplace", "Garden", "Adventure Sports", "Spa"],
  },
  {
    name: "Urban Loft Space",
    location: "Bangalore, Karnataka",
    services: ["Modern Catering", "Tech Setup", "Photography", "Bar Service"],
    price: 100000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    description: "Contemporary urban loft space ideal for modern celebrations and corporate events.",
    capacity: 150,
    amenities: ["WiFi", "Projector", "Sound System", "Bar", "Rooftop Access"],
  },
  {
    name: "Lakeside Pavilion",
    location: "Udaipur, Rajasthan",
    services: ["Catering", "Boat Rides", "Photography", "Traditional Music"],
    price: 220000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "Enchanting lakeside pavilion with serene water views and royal ambiance.",
    capacity: 350,
    amenities: ["Lake View", "Boat Access", "Garden", "Traditional Decor", "Outdoor Dining"],
  },
  {
    name: "Crystal Convention Center",
    location: "Hyderabad, Telangana",
    services: ["Catering", "AV Equipment", "Photography", "Security"],
    price: 130000,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    description: "State-of-the-art convention center with modern facilities and professional services.",
    capacity: 800,
    amenities: ["AC", "Projectors", "Sound System", "WiFi", "Parking"],
  },
  {
    name: "Garden Paradise Resort",
    location: "Kerala",
    services: ["Traditional Catering", "Ayurvedic Spa", "Photography", "Boat Rides"],
    price: 190000,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    description: "Tropical paradise resort surrounded by lush greenery and backwaters.",
    capacity: 280,
    amenities: ["Backwater View", "Spa", "Garden", "Traditional Decor", "Boat Access"],
  },
  {
    name: "Metropolitan Banquet",
    location: "Pune, Maharashtra",
    services: ["Catering", "Decoration", "Entertainment", "Valet Service"],
    price: 110000,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    description: "Sophisticated banquet hall in the heart of Pune with elegant interiors.",
    capacity: 320,
    amenities: ["AC", "Stage", "Sound System", "Parking", "Bridal Suite"],
  },
  {
    name: "Riverside Retreat",
    location: "Rishikesh, Uttarakhand",
    services: ["Organic Catering", "Yoga Sessions", "Photography", "Adventure Sports"],
    price: 160000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Peaceful riverside retreat perfect for spiritual and wellness-focused celebrations.",
    capacity: 180,
    amenities: ["River View", "Yoga Hall", "Organic Kitchen", "Adventure Sports", "Meditation Area"],
  },
  {
    name: "Royal Courtyard",
    location: "Agra, Uttar Pradesh",
    services: ["Mughlai Catering", "Cultural Shows", "Photography", "Heritage Tours"],
    price: 210000,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    description: "Historic courtyard venue with Mughal architecture and royal heritage.",
    capacity: 450,
    amenities: ["Heritage Architecture", "Courtyard", "Traditional Decor", "Cultural Programs", "Royal Dining"],
  },
  {
    name: "Skyline Terrace",
    location: "Gurgaon, Haryana",
    services: ["International Catering", "DJ", "Photography", "Bar Service"],
    price: 140000,
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&h=600&fit=crop",
    description: "Modern terrace venue with stunning city skyline views and contemporary amenities.",
    capacity: 220,
    amenities: ["City View", "Terrace", "Bar", "Sound System", "Modern Decor"],
  },
  {
    name: "Beachfront Villa",
    location: "Goa",
    services: ["Seafood Catering", "Beach Activities", "Photography", "Water Sports"],
    price: 230000,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    description: "Exclusive beachfront villa with private beach access and luxury amenities.",
    capacity: 120,
    amenities: ["Private Beach", "Pool", "Villa Rooms", "Water Sports", "Sunset Deck"],
  },
  {
    name: "Forest Lodge",
    location: "Coorg, Karnataka",
    services: ["Local Cuisine", "Nature Walks", "Photography", "Bonfire"],
    price: 170000,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    description: "Rustic forest lodge surrounded by coffee plantations and natural beauty.",
    capacity: 150,
    amenities: ["Forest View", "Coffee Plantation", "Bonfire Area", "Nature Trails", "Organic Food"],
  },
  {
    name: "Desert Oasis",
    location: "Jaisalmer, Rajasthan",
    services: ["Rajasthani Catering", "Camel Rides", "Folk Music", "Desert Safari"],
    price: 240000,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
    description: "Unique desert venue offering authentic Rajasthani experience under the stars.",
    capacity: 200,
    amenities: ["Desert View", "Camel Rides", "Folk Performances", "Star Gazing", "Traditional Tents"],
  },
  {
    name: "Hilltop Manor",
    location: "Mussoorie, Uttarakhand",
    services: ["Continental Catering", "Mountain Activities", "Photography", "Spa Services"],
    price: 185000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    description: "Charming hilltop manor with panoramic mountain views and colonial architecture.",
    capacity: 180,
    amenities: ["Mountain View", "Colonial Architecture", "Spa", "Garden", "Fireplace"],
  },
  {
    name: "Waterfront Pavilion",
    location: "Kochi, Kerala",
    services: ["Kerala Cuisine", "Backwater Cruise", "Photography", "Traditional Music"],
    price: 195000,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    description: "Elegant waterfront pavilion with traditional Kerala architecture and backwater views.",
    capacity: 300,
    amenities: ["Backwater View", "Traditional Architecture", "Boat Access", "Spice Garden", "Cultural Shows"],
  },
  {
    name: "Metropolitan Rooftop",
    location: "Mumbai, Maharashtra",
    services: ["Fusion Catering", "Live DJ", "Photography", "Premium Bar"],
    price: 260000,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
    description: "Exclusive rooftop venue with stunning Mumbai skyline views and premium amenities.",
    capacity: 250,
    amenities: ["Skyline View", "Rooftop", "Premium Bar", "Modern Decor", "City Lights"],
  },
]

async function seedVenues() {
  try {
    console.log("🔄 Attempting to connect to MongoDB...")

    // Set mongoose options for better connection handling
    mongoose.set("strictQuery", false)

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("✅ Successfully connected to MongoDB")
    console.log("📊 Database name:", mongoose.connection.name)

    // Check if venues collection exists and count documents
    const existingCount = await Venue.countDocuments()
    console.log(`📋 Existing venues in database: ${existingCount}`)

    // Clear existing venues
    if (existingCount > 0) {
      await Venue.deleteMany({})
      console.log("🗑️ Cleared existing venues")
    }

    // Insert sample venues
    console.log("📝 Inserting sample venues...")
    const insertedVenues = await Venue.insertMany(sampleVenues)
    console.log(`🎉 Successfully added ${insertedVenues.length} sample venues!`)

    // Verify insertion
    const finalCount = await Venue.countDocuments()
    console.log(`✅ Final venue count in database: ${finalCount}`)

    // Display added venues
    console.log("\n📋 Added venues:")
    insertedVenues.forEach((venue, index) => {
      console.log(`${index + 1}. ${venue.name} - ${venue.location} (₹${venue.price.toLocaleString()})`)
    })

    console.log("\n🎊 Database seeding completed successfully!")
    process.exit(0)
  } catch (error) {
    console.error("❌ Error seeding venues:", error)
    console.error("Stack trace:", error.stack)
    process.exit(1)
  }
}

// Handle process termination
process.on("SIGINT", async () => {
  console.log("\n🛑 Received SIGINT. Closing MongoDB connection...")
  await mongoose.connection.close()
  process.exit(0)
})

seedVenues()
