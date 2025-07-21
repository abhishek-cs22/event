"use client"

import { useEffect, useState } from "react"
import VenueCard from "../components/VenueCard"

const Venues = () => {
  const [venues, setVenues] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Wedding", "Corporate", "Luxury", "Outdoor", "Heritage"]

  useEffect(() => {
    fetch("http://localhost:5000/api/venues")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching venues:", error)
        setLoading(false)
      })
  }, [])

  const filteredVenues = venues.filter((venue) => {
    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" ||
      venue.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      venue.description?.toLowerCase().includes(selectedCategory.toLowerCase())
    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="loading-luxury w-16 h-16"></div>
        </div>
        <p className="text-slate-200 text-xl font-medium animate-pulse">Discovering premium venues...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 pt-24 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-luxury">
        {/* Header */}
        <br /><br /><br />
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6">
            Premium <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">Venues</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary spaces where <span className="text-emerald-400 font-semibold">luxury meets perfection</span>
          </p>
          <br />
        </div>

        {/* Search and Filters */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <div className="glass-luxury rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search venues by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-slate-800/50 border-2 border-slate-700 text-slate-100 rounded-xl text-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800/50 border-2 border-slate-700 text-slate-100 rounded-xl text-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all backdrop-blur-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <br />
          <div className="text-center">
            <div className="inline-flex items-center gap-3 glass-luxury px-6 py-3 rounded-full">
              <span className="text-2xl">🏛️</span>
              <p className="text-slate-300 text-lg font-medium">
                {filteredVenues.length} premium venue{filteredVenues.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>
        </div>
                  <br />
        {/* Venue Grid */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          {filteredVenues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {filteredVenues.map((venue, index) => (
                <div
                  key={venue._id}
                  className="w-full max-w-sm animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <VenueCard venue={venue} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-luxury rounded-3xl max-w-2xl mx-auto">
              <div className="text-8xl mb-8 animate-bounce">🔍</div>
              <h3 className="text-3xl font-bold text-slate-100 mb-4">No venues found</h3>
              <p className="text-slate-400 text-lg mb-8">Try adjusting your search criteria or browse all venues</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Venues
