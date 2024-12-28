import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <div className="w-3 h-5 rounded-full bg-orange-500 animate-bounce-delay-1"></div>
      <div className="w-3 h-5 rounded-full bg-purple-500 animate-bounce-delay-2"></div>
      <div className="w-3 h-5 rounded-full bg-green-500 animate-bounce-delay-3"></div>
      <div className="w-3 h-5 rounded-full bg-cyan-500 animate-bounce-delay-4"></div>
      <div className="w-3 h-5 rounded-full bg-red-500 animate-bounce-delay-5"></div>
    </div>
  );
};

export default Spinner;
