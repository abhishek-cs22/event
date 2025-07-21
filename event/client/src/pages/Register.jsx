// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// const Register = ({ onRegister }) => {
//   const [email, setEmail] = useState("")
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       onRegister()
//     }
//   }, [onRegister])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, password }),
//       })

//       const data = await res.json()

//       if (res.ok && data.token) {
//         localStorage.setItem("token", data.token)
//         onRegister()
//       } else {
//         setError(data.message || "Registration failed")
//       }
//     } catch (error) {
//       setError("Network error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 w-full max-w-md">
//         <div className="glass-luxury rounded-3xl p-8 shadow-2xl animate-fadeInScale">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl text-slate-900 font-bold">E</span>
//               </div>
//               <div>
//                 <h1 className="font-display text-3xl font-bold gradient-gold-text">Eventopia</h1>
//                 <div className="text-xs text-slate-400 font-medium tracking-wider">LUXURY EVENTS</div>
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-slate-100 mb-2">Join Eventopia</h2>
//             <p className="text-slate-400">Create your exclusive account</p>
//           </div>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6 text-center animate-fadeInUp backdrop-blur-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="form-luxury space-y-6">
//             <div>
//               <label className="block text-slate-300 font-medium mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="block text-slate-300 font-medium mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full"
//               />
//             </div>

//             <div>
//               <label className="block text-slate-300 font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 placeholder="Create a secure password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
//                 loading
//                   ? "bg-slate-600 text-slate-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
//               }`}
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center gap-3">
//                   <div className="loading-luxury w-5 h-5"></div>
//                   <span>Creating Account...</span>
//                 </div>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="text-center mt-8">
//             <p className="text-slate-400">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-amber-400 hover:text-amber-300 font-semibold hover:underline transition-colors"
//               >
//                 Sign in here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      onRegister()
    }
  }, [onRegister])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await res.json()

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token)
        onRegister()
      } else {
        setError(data.message || "Registration failed")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-800/30 from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Glowing Background Circles */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-16 left-16 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 w-full max-w-md bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-gray-900 font-bold text-2xl">E</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-emerald-400">Eventify</h1>
          <p className="text-gray-400 mt-1">Create your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md hover:scale-[1.02]"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 font-semibold hover:underline"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
