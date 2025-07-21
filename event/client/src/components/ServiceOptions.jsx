"use client"

const serviceList = [
  { id: "catering", label: "Premium Catering", icon: "🍽️", price: 5000 },
  { id: "music", label: "Live Music / DJ", icon: "🎵", price: 5000 },
  { id: "photography", label: "Professional Photography", icon: "📸", price: 5000 },
  { id: "decoration", label: "Event Decoration", icon: "🎨", price: 5000 },
  { id: "lighting", label: "Special Lighting", icon: "💡", price: 5000 },
  { id: "security", label: "Security Services", icon: "🛡️", price: 5000 },
]

const ServiceOptions = ({ selectedServices, onChange }) => {
  const handleToggle = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      onChange(selectedServices.filter((service) => service !== serviceId))
    } else {
      onChange([...selectedServices, serviceId])
    }
  }

  return (
    <div className="bg-slate-700/50 rounded-2xl p-6 mb-8">
      <h3 className="text-xl font-bold text-slate-100 mb-6">Additional Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceList.map((service) => (
          <label key={service.id} className="cursor-pointer group">
            <input
              type="checkbox"
              value={service.id}
              checked={selectedServices.includes(service.id)}
              onChange={() => handleToggle(service.id)}
              className="sr-only"
            />
            <div
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedServices.includes(service.id)
                  ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/20"
                  : "border-slate-600 hover:border-slate-500 group-hover:bg-slate-600/30"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{service.icon}</span>
                {selectedServices.includes(service.id) && (
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 text-sm font-bold">✓</span>
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-slate-100 mb-1">{service.label}</h4>
              <p className="text-amber-400 font-bold">+₹{service.price.toLocaleString()}</p>
            </div>
          </label>
        ))}
      </div>

      {selectedServices.length > 0 && (
        <div className="mt-6 p-4 bg-slate-600/50 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Selected Services ({selectedServices.length})</span>
            <span className="text-amber-400 font-bold">+₹{(selectedServices.length * 5000).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceOptions
