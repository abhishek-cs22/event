"use client"

import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    const val = e.target.value
    setQuery(val)
    onSearch(val)
  }

  return (
    <div className="mb-8 px-4">
      <div className="relative max-w-2xl mx-auto">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 z-10">🔍</span>
        <input
          type="text"
          placeholder="Search venues by name or location..."
          value={query}
          onChange={handleChange}
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-full bg-white shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 focus:outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              onSearch("")
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 hover:text-red-500 transition-colors duration-300 hover:bg-gray-100 rounded-full p-1"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
