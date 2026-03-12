// src/components/Wrapper.jsx
import React from "react";

const Wrapper = ({ children }) => (
  <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-xl shadow-lg">
    {children}
  </div>
);

export default Wrapper;