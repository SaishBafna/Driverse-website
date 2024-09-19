import React, { useState } from "react";

const FloatingLabelInput = ({
  name,
  value,
  onChange,
  label,
  type = "text",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-4 font-sans">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full px-4 py-2 text-base text-gray-700 placeholder-transparent
                   border-2 border-gray-300 rounded-md
                   focus:border-blue-500 focus:ring-0 focus:outline-none
                   transition-all duration-200 ease-in-out"
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-2 -top-2.5 px-1 text-sm transition-all duration-200 ease-in-out
                    ${
                      isFocused || value
                        ? "text-blue-500 bg-white"
                        : "text-transparent bg-transparent"
                    }
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                    peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 
                    peer-focus:text-sm peer-focus:bg-white`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
