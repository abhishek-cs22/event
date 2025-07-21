// "use client"

// import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const heroImages = [
//     "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop",
//     "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop",
//     "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop",
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-amber-300/5 to-amber-400/10 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "4s" }}
//         ></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center">
//         {/* Background Image Slider */}
//         <div className="absolute inset-0">
//           {heroImages.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-2000 ${
//                 index === currentSlide ? "opacity-30" : "opacity-0"
//               }`}
//             >
//               <img src={image || "/placeholder.svg"} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
//         </div>

//         <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
//           <div className="animate-fadeInUp">
//             <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
//               <span className="gradient-gold-text">Eventify</span>
//             </h1>
//             <div className="flex justify-center items-center space-x-6 mb-12">
//               <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
//               <div className="text-2xl text-amber-400">✦</div>
//               <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
//             </div>
//           </div>

//           <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
//             <p className="text-2xl md:text-3xl lg:text-4xl text-slate-200 mb-6 font-light leading-relaxed">
//               Where <span className="font-display font-semibold text-amber-400">Extraordinary Events</span> Begin
//             </p>
//             <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
//               Discover the world's most prestigious venues and create unforgettable moments with our curated collection
//               of luxury event spaces
//             </p>
//           </div>

//           {/* Stats */}
//           <div
//             className="animate-fadeInUp grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//             style={{ animationDelay: "0.6s" }}
//           >
//             {[
//               { number: "500+", label: "Premium Venues", icon: "🏛️" },
//               { number: "10K+", label: "Successful Events", icon: "✨" },
//               { number: "4.9★", label: "Client Rating", icon: "⭐" },
//             ].map((stat, index) => (
//               <div key={index} className="glass-luxury rounded-2xl p-8 hover-luxury hover-glow">
//                 <div className="text-4xl mb-4">{stat.icon}</div>
//                 <div className="text-3xl md:text-4xl font-bold gradient-gold-text mb-2">{stat.number}</div>
//                 <div className="text-slate-300 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
//             <Link
//               to="/venues"
//               className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 group"
//             >
//               <span>Explore Premium Venues</span>
//               <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//             </Link>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="section-padding relative">
//         <div className="container-luxury">
//           <div className="text-center mb-20 animate-fadeInUp">
//             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
//               Why Choose <sifypan className="gradient-gold-text">Event</sifypan>
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
//             <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//               Experience the pinnacle of luxury event planning with our exclusive services and premium venues
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: "👑",
//                 title: "Luxury Venues",
//                 description: "Handpicked premium locations that define elegance and sophistication",
//                 gradient: "from-amber-500/20 to-amber-600/10",
//               },
//               {
//                 icon: "🎯",
//                 title: "Personalized Service",
//                 description: "Dedicated event specialists ensuring every detail exceeds expectations",
//                 gradient: "from-rose-500/20 to-rose-600/10",
//               },
//               {
//                 icon: "✨",
//                 title: "Seamless Experience",
//                 description: "From booking to celebration, we handle everything with precision",
//                 gradient: "from-blue-500/20 to-blue-600/10",
//               },
//               {
//                 icon: "🏆",
//                 title: "Award Winning",
//                 description: "Recognized globally for excellence in luxury event management",
//                 gradient: "from-emerald-500/20 to-emerald-600/10",
//               },
//               {
//                 icon: "🔒",
//                 title: "Trusted & Secure",
//                 description: "Your privacy and security are our highest priorities",
//                 gradient: "from-purple-500/20 to-purple-600/10",
//               },
//               {
//                 icon: "🌟",
//                 title: "Exclusive Access",
//                 description: "Access to venues and services not available anywhere else",
//                 gradient: "from-indigo-500/20 to-indigo-600/10",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="card-luxury hover-luxury group animate-fadeInUp"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <span className="text-3xl">{feature.icon}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-amber-400 transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section-padding bg-gradient-to-r from-slate-900/50 to-slate-800/50 relative">
//         <div className="container-luxury">
//           <div className="text-center mb-20 animate-fadeInUp">
//             <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-6">
//               What Our <span className="gradient-gold-text">Clients Say</span>
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Priya Sharma",
//                 role: "Bride",
//                 content:
//                   "Eventopia made our dream wedding come true. The venue was absolutely stunning and the service was impeccable.",
//                 rating: 5,
//                 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//               },
//               {
//                 name: "Rajesh Kumar",
//                 role: "Corporate Executive",
//                 content:
//                   "Our company event was a huge success thanks to Eventopia's professional team and beautiful venue selection.",
//                 rating: 5,
//                 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//               },
//               {
//                 name: "Anita Desai",
//                 role: "Event Planner",
//                 content:
//                   "I've worked with many platforms, but Eventopia's attention to detail and luxury venues are unmatched.",
//                 rating: 5,
//                 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//               },
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="glass-luxury rounded-2xl p-8 hover-luxury animate-fadeInUp"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="flex items-center mb-6">
//                   <img
//                     src={testimonial.image || "/placeholder.svg"}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="text-lg font-semibold text-slate-100">{testimonial.name}</h4>
//                     <p className="text-slate-400">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-amber-400 text-xl">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-slate-300 leading-relaxed italic">"{testimonial.content}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding relative">
//         <div className="container-luxury text-center">
//           <div className="animate-fadeInUp">
//             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-8">
//               Ready to Create <span className="gradient-gold-text">Magic</span>?
//             </h2>
//             <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Join thousands of satisfied clients who have created unforgettable memories with Eventopia
//             </p>
//             <Link
//               to="/venues"
//               className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 group"
//             >
//               <span>Start Your Journey</span>
//               <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">✨</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home



"use client"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop",
  ]
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-teal-600/10 rounded-full blur-3xl animate-float"></div>
        {/* Secondary floating orb */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/15 to-teal-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Tertiary floating orb */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-green-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Additional smaller orbs for depth */}
        <div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/8 to-teal-500/12 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-br from-green-400/8 to-emerald-500/12 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Enhanced Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
                index === currentSlide ? "opacity-25 scale-105" : "opacity-0 scale-100"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover filter brightness-75 contrast-110"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-teal-950/70 to-green-950/95"></div>
        </div>
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <div className="animate-fadeInUp">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl">
                Eventify
              </span>
            </h1>
            <div className="flex justify-center items-center space-x-6 mb-12">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              <div className="text-3xl text-emerald-300 animate-pulse">✦</div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            </div>
          </div>
          <br />
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-100 mb-6 font-light leading-relaxed">
              Unforgettable{" "}
              <span className="font-display font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Experiences Begin
              </span>{" "}
              Here
            </p>
            <p className="text-lg md:text-xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Discover the world's most prestigious venues and create unforgettable moments with our curated collection
              of luxury event spaces that redefine elegance
            </p>
          </div>
          {/* Enhanced Stats */}
          <br />
          <div
            className="animate-fadeInUp grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { number: "500+", label: "Premium Venues", gradient: "from-emerald-500/20 to-teal-600/10" },
              { number: "10K+", label: "Successful Events",  gradient: "from-green-500/20 to-teal-600/10" },
              { number: "4.9★", label: "Client Rating", gradient: "from-teal-500/20 to-green-600/10" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-gradient-to-br ${stat.gradient} border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-emerald-400/30 transition-all duration-500 group shadow-2xl hover:shadow-emerald-500/25`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Enhanced CTA Button */}
          <br /> <br />
          <div className="animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
            <Link
              to="/venues"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:via-teal-500 hover:to-green-500 text-white text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Explore Venues</span>
              <span className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* Enhanced Features Section */}
      <section className="section-padding relative">
        <div className="container-luxury">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Eventify
              </span>
            </h2>
            <br />
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-l text-slate-300 max-w-3xl mx-auto leading-relaxed" >
              Experience the pinnacle of luxury event planning with our exclusive services and premium venues
            </p>
            <br />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "👑",
                title: "Luxury Venues",
                description: "Handpicked premium locations that define elegance and sophistication",
                gradient: "from-emerald-500/20 to-teal-600/10",
                iconBg: "from-emerald-500/30 to-teal-600/20",
              },
              {
                icon: "🎯",
                title: "Personalized Service",
                description: "Dedicated event specialists ensuring every detail exceeds expectations",
                gradient: "from-green-500/20 to-emerald-600/10",
                iconBg: "from-green-500/30 to-emerald-600/20",
              },
              {
                icon: "✨",
                title: "Seamless Experience",
                description: "From booking to celebration, we handle everything with precision",
                gradient: "from-teal-500/20 to-green-600/10",
                iconBg: "from-teal-500/30 to-green-600/20",
              },
              {
                icon: "🏆",
                title: "Award Winning",
                description: "Recognized globally for excellence in luxury event management",
                gradient: "from-emerald-500/20 to-teal-600/10",
                iconBg: "from-emerald-500/30 to-teal-600/20",
              },
              {
                icon: "🔒",
                title: "Trusted & Secure",
                description: "Your privacy and security are our highest priorities",
                gradient: "from-green-500/20 to-emerald-600/10",
                iconBg: "from-green-500/30 to-emerald-600/20",
              },
              {
                icon: "🌟",
                title: "Exclusive Access",
                description: "Access to venues and services not available anywhere else",
                gradient: "from-teal-500/20 to-green-600/10",
                iconBg: "from-teal-500/30 to-green-600/20",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-gradient-to-br ${feature.gradient} border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-emerald-400/30 transition-all duration-500 group shadow-xl hover:shadow-2xl animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-900/30 to-teal-900/30 relative backdrop-blur-sm">
        <div className="container-luxury">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <br />
            <br />
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Bride",
                content:
                  "Eventify made our dream wedding come true. The venue was absolutely stunning and the service was impeccable.",
                rating: 5,
                // image: "https://unsplash.com/photos/a-woman-wearing-sunglasses-sitting-in-a-field-JSMVuvI_jzE",
              },
              {
                name: "Rajesh Kumar",
                role: "Corporate Executive",
                content:
                  "Our company event was a huge success thanks to Eventify's professional team and beautiful venue selection.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Anita Desai",
                role: "Event Planner",
                content:
                  "I've worked with many platforms, but Eventify's attention to detail and luxury venues are unmatched.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-emerald-400/30 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-emerald-400/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">{testimonial.name}</h4>
                    <p className="text-emerald-300">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-emerald-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section className="section-padding relative">
        <div className="container-luxury text-center">
          <div className="animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-8">
              Ready to Create{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Magic
              </span>
              ?
            </h2>
            <br />
            <Link
              to="/venues"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:via-teal-500 hover:to-green-500 text-white text-xl font-bold rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Start Your Journey</span>
              <span className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform duration-300">
                ✨
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home