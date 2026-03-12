// src/components/ControlledInput.jsx
import React, { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Controlled Input:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      <p className="text-sm text-gray-500 mt-1">Value: {value}</p>
    </div>
  );
};

export default ControlledInput;