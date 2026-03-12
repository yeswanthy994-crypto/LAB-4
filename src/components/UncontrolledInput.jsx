// src/components/UncontrolledInput.jsx
import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const showValue = () => {
    alert(`Uncontrolled value: ${inputRef.current.value}`);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Uncontrolled Input:</label>
      <input
        type="text"
        ref={inputRef}
        className="border rounded px-3 py-2 w-full"
      />
      <button
        onClick={showValue}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Value
      </button>
    </div>
  );
};

export default UncontrolledInput;