import mongoose from "mongoose"

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    services: [String],
    price: {
      type: Number,
      required: true,
    },
    image: String,
    description: String,
    capacity: Number,
    amenities: [String],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model("Venue", venueSchema)
