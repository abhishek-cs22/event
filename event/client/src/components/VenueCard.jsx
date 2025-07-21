"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

const VenueCard = ({ venue }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <div className="group card-luxury hover-luxury w-full max-w-sm mx-auto overflow-hidden">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
            <div className="loading-luxury w-8 h-8"></div>
          </div>
        )}
        {!imageError ? (
          <img
            src={venue.image || "/placeholder.svg"}
            alt={venue.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-600">
            <div className="text-center text-slate-300">
              <div className="text-4xl mb-2">🏛️</div>
              <div className="text-sm font-medium">{venue.name}</div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 glass-luxury px-4 py-2 rounded-xl border border-amber-500/30">
          <div className="text-xs text-slate-400 font-medium">Starting from</div>
          <div className="text-lg font-bold gradient-gold-text">₹{venue.price?.toLocaleString() || "N/A"}</div>
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 glass-luxury px-3 py-1 rounded-full border border-slate-600">
          <div className="flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span className="text-slate-200 text-sm font-medium">4.8</span>
          </div>
        </div>

        {/* Venue Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-amber-400 transition-colors duration-300">
            {venue.name}
          </h3>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-amber-400">📍</span>
            <span className="text-sm font-medium">{venue.location}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-amber-400">👥</span>
            <span className="text-sm font-medium">Up to {venue.capacity} guests</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {venue.services?.slice(0, 2).map((service, index) => (
              <span
                key={index}
                className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
            {venue.services?.length > 2 && (
              <span className="text-slate-500 text-xs italic px-2 py-1">+{venue.services.length - 2} more</span>
            )}
          </div>
        </div>

        <Link
          to={`/venue/${venue._id}`}
          className="group/btn relative inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
          <span className="relative z-10">View Details</span>
          <span className="relative z-10 text-lg group-hover/btn:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </div>
  )
}

export default VenueCard
