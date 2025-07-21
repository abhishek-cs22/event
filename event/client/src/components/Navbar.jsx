// "use client"

// import { Link, useLocation } from "react-router-dom"
// import { useState } from "react"

// const Navbar = ({ onLogout }) => {
//   const location = useLocation()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const isActive = (path) => location.pathname === path

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-amber-500/20">
//       <div className="container-luxury">
//         <div className="flex justify-between items-center py-6">
//           {/* Logo */}
//           <Link to="/" className="group flex items-center gap-3 hover:scale-105 transition-all duration-300">
//             <div className="relative">
//               <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
//                 <span className="text-2xl text-slate-900 font-bold">E</span>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
//             </div>
//             <div>
//               <span className="font-display text-2xl font-bold gradient-gold-text">Eventify</span>
//               <div className="text-xs text-slate-400 font-medium tracking-wider">LUXURY EVENTS</div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                 isActive("/")
//                   ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 shadow-lg shadow-amber-500/10"
//                   : "text-slate-300 hover:text-amber-400 hover:bg-slate-800/50"
//               }`}
//             >
//               Home
//               {isActive("/") && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
//               )}
//             </Link>
//             <Link
//               to="/venues"
//               className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                 isActive("/venues")
//                   ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 shadow-lg shadow-amber-500/10"
//                   : "text-slate-300 hover:text-amber-400 hover:bg-slate-800/50"
//               }`}
//             >
//               Venues
//               {isActive("/venues") && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
//               )}
//             </Link>
//             <button
//               onClick={onLogout}
//               className="group relative px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-slate-500 overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//               <span className="relative z-10">Logout</span>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-xl bg-slate-800/50 text-slate-300 hover:text-amber-400 transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-slate-700">
//             <div className="flex flex-col space-y-2">
//               <Link
//                 to="/"
//                 className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                   isActive("/") ? "bg-amber-500/20 text-amber-400" : "text-slate-300 hover:text-amber-400"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/venues"
//                 className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                   isActive("/venues") ? "bg-amber-500/20 text-amber-400" : "text-slate-300 hover:text-amber-400"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Venues
//               </Link>
//               <button
//                 onClick={() => {
//                   onLogout()
//                   setIsMenuOpen(false)
//                 }}
//                 className="px-4 py-3 bg-slate-700 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:bg-slate-600 text-left"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar




"use client"

import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = ({ onLogout }) => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-gradient-to-r from-green-950/95 via-emerald-950/95 to-slate-950/95 border-b border-green-500/30 shadow-2xl shadow-green-500/10"
          : "backdrop-blur-lg bg-gradient-to-r from-green-950/80 via-emerald-950/80 to-slate-950/80 border-b border-green-500/20"
      }`}
    >
      <div className="container-luxury">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-4 hover:scale-105 transition-all duration-500">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-green-500/25">
                <span className="text-2xl text-white font-bold font-display">E</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-2xl blur-lg group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-green-400/0 group-hover:border-green-400/50 transition-all duration-500 animate-pulse"></div>
            </div>

            <div className="relative">
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Eventify
              </span>
              <div className="text-xs text-slate-400 font-medium tracking-[0.2em] uppercase opacity-80">
                Your Vision, Our Venue
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {[
                { path: "/", label: "Home", icon: "🏠" },
                { path: "/venues", label: "Venues", icon: "🏛️" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative group px-8 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 text-green-300 shadow-lg shadow-green-500/20 border border-green-500/30"
                      : "text-slate-300 hover:text-green-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 border border-transparent hover:border-green-500/20"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-base">{item.label}</span>
                  </div>
                  {isActive(item.path) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                </Link>
              ))}
            </div>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-600 to-transparent mx-2"></div>

            <button
              onClick={onLogout}
              className="group relative px-8 py-4 bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 hover:from-red-600/80 hover:via-red-500/80 hover:to-red-600/80 text-slate-200 hover:text-white font-semibold rounded-2xl transition-all duration-500 hover:scale-105 border border-slate-600/50 hover:border-red-500/50 overflow-hidden shadow-lg hover:shadow-red-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center gap-3">
                <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300">🚪</span>
                <span className="text-base">Logout</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className={`md:hidden relative p-4 rounded-2xl transition-all duration-500 overflow-hidden ${
              isMenuOpen
                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30"
                : "bg-slate-800/50 text-slate-300 hover:text-green-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 border border-slate-700/50 hover:border-green-500/30"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="relative z-10 w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-6 border-t border-green-500/20">
            <div className="flex flex-col space-y-4">
              {[
                { path: "/", label: "Home", icon: "🏠" },
                { path: "/venues", label: "Venues", icon: "🏛️" },
              ].map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative group px-6 py-5 rounded-2xl font-semibold transition-all duration-500 overflow-hidden ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30"
                      : "text-slate-300 hover:text-green-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 border border-transparent hover:border-green-500/20"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                  </div>
                  {isActive(item.path) && (
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </Link>
              ))}

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-2"></div>

              <button
                onClick={() => {
                  onLogout()
                  setIsMenuOpen(false)
                }}
                className="group relative px-6 py-5 bg-gradient-to-r from-slate-700/80 to-slate-600/80 hover:from-red-600/80 hover:to-red-500/80 text-slate-200 hover:text-white font-semibold rounded-2xl transition-all duration-500 text-left border border-slate-600/50 hover:border-red-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">🚪</span>
                  <span className="text-lg">Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </nav>
  )
}

export default Navbar
