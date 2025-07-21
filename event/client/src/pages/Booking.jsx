"use client"

import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ServiceOptions from "../components/ServiceOptions"

const Booking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { venue, bookingData } = location.state || {}

  const [services, setServices] = useState([])
  const [paymentMethod, setPaymentMethod] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [bookingDetails, setBookingDetails] = useState(null)
  const [error, setError] = useState("")

  if (!venue || !bookingData) {
    navigate("/venues")
    return null
  }

  const calculateTotal = () => {
    const basePrice = venue.price
    const serviceCharges = services.length * 5000
    return basePrice + serviceCharges
  }

  const handleBooking = async () => {
    if (!paymentMethod) {
      setError("Please select a payment method")
      return
    }

    setLoading(true)
    setError("")

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        setError("Please log in to continue")
        navigate("/login")
        return
      }

      console.log("🔄 Sending booking request...")

      const bookingPayload = {
        venueId: venue._id,
        occasion: bookingData.occasion,
        numberOfPeople: Number.parseInt(bookingData.numberOfPeople),
        date: bookingData.date,
        services,
        paymentMethod,
        specialRequests,
      }

      console.log("📋 Booking payload:", bookingPayload)

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingPayload),
      })

      console.log("📡 Response status:", res.status)

      const data = await res.json()
      console.log("📋 Response data:", data)

      // Check for success in the response
      if (res.ok && data.success === true) {
        setBookingDetails(data.booking)
        setConfirmed(true)
        setError("")
        console.log("✅ Booking successful!")
      } else {
        console.error("❌ Booking failed:", data)

        // Handle different error scenarios
        if (data.success === false) {
          setError(data.message || "Booking failed. Please try again.")
        } else {
          // Handle old response format or unexpected responses
          setError("Booking failed. Please try again.")
        }

        // If unauthorized, redirect to login
        if (res.status === 401) {
          localStorage.removeItem("token")
          navigate("/login")
        }
      }
    } catch (error) {
      console.error("❌ Network error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  if (confirmed && bookingDetails) {
    return (
      <div className="min-h-screen bg-green-800/30 from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 pt-12">
        <div className="max-w-2xl w-full glass-luxury rounded-3xl p-8 text-center animate-fadeInScale">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white">✓</span>
            
          </div>

          <h2 className="text-3xl font-bold text-slate-100 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-300 text-lg mb-8">
            Your venue has been successfully booked. You will receive a confirmation email shortly.
          </p>

          <div className="glass-card rounded-2xl p-6 mb-8 text-left space-y-4">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Booking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div>
                <span className="font-medium text-slate-400">Venue:</span>
                <p className="font-semibold">{venue.name}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Occasion:</span>
                <p className="font-semibold">{bookingData.occasion}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Date:</span>
                <p className="font-semibold">{new Date(bookingData.date).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Guests:</span>
                <p className="font-semibold">{bookingData.numberOfPeople} people</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Services:</span>
                <p className="font-semibold">{services.length > 0 ? services.join(", ") : "None"}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Total Amount:</span>
                <p className="font-semibold text-emerald-400">
                  ₹{(bookingDetails.totalAmount || calculateTotal()).toLocaleString()}
                </p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Payment Method:</span>
                <p className="font-semibold">{paymentMethod}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Transaction ID:</span>
                <p className="font-semibold text-amber-400">
                  {bookingDetails.paymentDetails?.transactionId || `TXN${Date.now()}`}
                </p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Booking Status:</span>
                <p className="font-semibold text-emerald-400">{bookingDetails.bookingStatus || "Confirmed"}</p>
              </div>
              <div>
                <span className="font-medium text-slate-400">Booking ID:</span>
                <p className="font-semibold text-slate-300">{bookingDetails._id}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/venues")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Book Another Venue
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-800/30 via-slate-900 to-slate-800 p-4 pt-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto py-8">
        <div className="glass-luxury rounded-3xl overflow-hidden">
          {/* Header */}
          <br /><br /><br />
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 border-b border-slate-600">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">Complete Your Booking</h2>
            <p className="text-slate-300">Review your details and confirm your reservation</p>
          </div>

          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6 text-center animate-fadeInUp backdrop-blur-sm">
                {error}
              </div>
            )}

            {/* Venue Summary */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-6">
                <img
                  src={venue.image || "/placeholder.svg"}
                  alt={venue.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{venue.name}</h3>
                  <p className="text-slate-400 mb-3">{venue.location}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Occasion:</span>
                      <p className="font-semibold text-slate-200">{bookingData.occasion}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Date:</span>
                      <p className="font-semibold text-slate-200">{new Date(bookingData.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Guests:</span>
                      <p className="font-semibold text-slate-200">{bookingData.numberOfPeople}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Base Price:</span>
                      <p className="font-semibold text-amber-400">₹{venue.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <ServiceOptions selectedServices={services} onChange={setServices} />

            {/* Special Requests */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Special Requests</h3>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Any special requirements or requests for your event..."
                className="w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-xl px-4 py-3 h-24 resize-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>

            {/* Payment Method */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Credit Card", "Debit Card", "UPI", "Net Banking"].map((method) => (
                  <label key={method} className="cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">
                          {method === "Credit Card" && "💳"}
                          {method === "Debit Card" && "💳"}
                          {method === "UPI" && "📱"}
                          {method === "Net Banking" && "🏦"}
                        </div>
                        <span className="text-slate-200 font-medium">{method}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Price Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-slate-300">
                  <span>Venue Base Price</span>
                  <span>₹{venue.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Additional Services ({services.length})</span>
                  <span>₹{(services.length * 5000).toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-600 pt-3">
                  <div className="flex justify-between text-xl font-bold text-amber-400">
                    <span>Total Amount</span>
                    <span>₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleBooking}
              disabled={loading || !paymentMethod}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                loading || !paymentMethod
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="loading-luxury w-5 h-5"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                `Confirm Booking - ₹${calculateTotal().toLocaleString()}`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
