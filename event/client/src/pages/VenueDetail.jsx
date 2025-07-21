"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const VenueDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [venue, setVenue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    occasion: "",
    numberOfPeople: "",
    date: "",
  })

  useEffect(() => {
    fetch(`http://localhost:5000/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVenue(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching venue:", error)
        setLoading(false)
      })
  }, [id])

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!bookingData.occasion || !bookingData.numberOfPeople || !bookingData.date) {
      alert("Please fill in all required fields")
      return
    }

    navigate(`/booking/${venue._id}`, {
      state: {
        venue,
        bookingData,
      },
    })
  }

  if (loading) {
    return (

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex flex-col items-center justify-center">
        <div className="relative">
          
          <div className="w-12 h-12 border-4 border-green-600 border-t-amber-500 rounded-full animate-spin mb-4"></div>
        </div>
        <br /><br />
        <p className="text-green-200 text-lg font-medium">Loading venue details...</p>
      </div>
    )
  }

  if (!venue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold text-green-100 mb-4">Venue not found</h2>
        <p className="text-green-400 text-lg mb-8">The venue you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={venue.image || "/placeholder.svg?height=600&width=1200"}
            alt={venue.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>

          {/* Price Badge */}
          <div className="absolute top-8 right-8 bg-green-900/90 backdrop-blur-sm border border-amber-500/30 text-amber-400 px-6 py-3 rounded-2xl">
            <span className="text-sm font-medium text-green-200">Starting from</span>
            <div className="text-2xl font-bold">₹{venue.price?.toLocaleString()}</div>
          </div>

          {/* Venue Title Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{venue.name}</h1>
            <div className="flex items-center gap-3 text-xl text-green-200">
              <span className="text-amber-400">📍</span>
              <span>{venue.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {venue.description && (
                <div className="bg-green-800/50 backdrop-blur-sm border border-green-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">About This Venue</h3>
                  <p className="text-green-200 text-lg leading-relaxed">{venue.description}</p>
                </div>
              )}

              <div className="bg-green-800/50 backdrop-blur-sm border border-green-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Services & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-3">Services Available</h4>
                    <div className="space-y-2">
                      {venue.services?.map((service, index) => (
                        <div key={index} className="flex items-center gap-3 text-green-200">
                          <span className="text-amber-400">✓</span>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {venue.amenities && venue.amenities.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-amber-400 mb-3">Amenities</h4>
                      <div className="space-y-2">
                        {venue.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3 text-green-200">
                            <span className="text-amber-400">✓</span>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {venue.capacity && (
                <div className="bg-green-800/50 backdrop-blur-sm border border-green-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Capacity</h3>
                  <div className="flex items-center gap-3 text-green-200">
                    <span className="text-2xl text-amber-400">👥</span>
                    <span className="text-xl">Up to {venue.capacity} guests</span>
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-green-800/50 backdrop-blur-sm border border-green-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Book This Venue</h3>

                {!showBookingForm ? (
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-green-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
                  >
                    Start Booking Process
                  </button>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div>
                      <label className="block text-green-200 font-medium mb-2">Occasion *</label>
                      <select
                        value={bookingData.occasion}
                        onChange={(e) => setBookingData({ ...bookingData, occasion: e.target.value })}
                        className="w-full bg-green-700 border border-green-600 text-green-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        required
                      >
                        <option value="">Select Occasion</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Conference">Conference</option>
                        <option value="Social Gathering">Social Gathering</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-green-200 font-medium mb-2">Number of People *</label>
                      <input
                        type="number"
                        min="1"
                        max={venue.capacity}
                        value={bookingData.numberOfPeople}
                        onChange={(e) => setBookingData({ ...bookingData, numberOfPeople: e.target.value })}
                        className="w-full bg-green-700 border border-green-600 text-green-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        placeholder="Enter number of guests"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-green-200 font-medium mb-2">Event Date *</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-green-700 border border-green-600 text-green-100 rounded-xl px-4 py-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="flex-1 bg-green-700 hover:bg-green-600 text-green-300 font-medium py-3 px-4 rounded-xl transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-green-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueDetail
