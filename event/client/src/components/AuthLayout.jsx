import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"></div>

      <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-xl shadow-lg animate-slideUp">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
