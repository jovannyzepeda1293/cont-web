// src/layouts/MainLayout.jsx
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-purple-900 relative">
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">FactuPlus</h1>
          <p className="text-xl md:text-2xl">Tu aliado en facturación</p>
        </div>

        <div className="w-full max-w-4xl">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
