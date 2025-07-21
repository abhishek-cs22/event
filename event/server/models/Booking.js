import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    venue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
      required: true,
    },
    occasion: {
      type: String,
      required: true,
      enum: ["Wedding", "Corporate Event", "Birthday Party", "Anniversary", "Conference", "Social Gathering", "Other"],
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    date: {
      type: Date,
      required: true,
    },
    services: [String],
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentDetails: {
      method: {
        type: String,
        enum: ["Credit Card", "Debit Card", "UPI", "Net Banking", "Cash"],
        required: true,
      },
      transactionId: String,
      paymentStatus: {
        type: String,
        enum: ["Pending", "Completed", "Failed", "Refunded"],
        default: "Pending",
      },
      paidAmount: {
        type: Number,
        default: 0,
      },
    },
    bookingStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
      default: "Pending",
    },
    specialRequests: String,

    // Keep old fields for backward compatibility during migration
    paymentStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model("Booking", bookingSchema)
