import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-1">
      <div className="w-2 h-3 rounded-full bg-orange-500 animate-bounce-delay-1"></div>
      <div className="w-2 h-3 rounded-full bg-purple-500 animate-bounce-delay-2"></div>
      <div className="w-2 h-3 rounded-full bg-green-500 animate-bounce-delay-3"></div>
      <div className="w-2 h-3 rounded-full bg-cyan-500 animate-bounce-delay-4"></div>
      <div className="w-2 h-3 rounded-full bg-red-500 animate-bounce-delay-5"></div>
    </div>
  );
};

export default Spinner;
