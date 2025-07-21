// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       onLogin()
//     }
//   }, [onLogin])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await res.json()

//       if (res.ok && data.token) {
//         localStorage.setItem("token", data.token)
//         onLogin()
//       } else {
//         setError(data.message || "Login failed")
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
//         <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-full blur-3xl animate-float"
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
//                 <h1 className="font-display text-3xl font-bold gradient-gold-text">Eventify</h1>
//                 <div className="text-xs text-slate-400 font-medium tracking-wider">LUXURY EVENTS</div>
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-slate-100 mb-2">Welcome Back</h2>
//             <p className="text-slate-400">Sign in to your exclusive account</p>
//           </div>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6 text-center animate-fadeInUp backdrop-blur-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="form-luxury space-y-6">
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
//                 placeholder="Enter your password"
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
//                   <span>Signing in...</span>
//                 </div>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>

//           <div className="text-center mt-8">
//             <p className="text-slate-400">
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-amber-400 hover:text-amber-300 font-semibold hover:underline transition-colors"
//               >
//                 Create one here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

// "use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      onLogin()
    }
  }, [onLogin])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token)
        onLogin()
      } else {
        setError(data.message || "Login failed")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-800/30 from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 w-full max-w-md bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-teal-400">Eventify</h1>
          <p className="text-gray-400 mt-1">Welcome back! Please login to continue.</p>
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
            <label className="block text-gray-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-md hover:scale-[1.02]"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-teal-400 font-semibold hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
