import React from "react";

const Shimmer = () => {
  const shimmerClass = "bg-slate-300 animate-pulse rounded-md";
  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[1, 1, 1, 1, 1, 1].map((index) => (
        <div
          key={index}
          className="flex flex-col p-4 h-80 bg-slate-100 text-left rounded-md justify-between"
        >
          <div className="flex flex-col gap-3">
            <span className={`w-1/5 h-4 ${shimmerClass}`}></span>
            <span className={`w-full h-7 ${shimmerClass}`}></span>
            <p className={`w-full h-16 ${shimmerClass}`}></p>
          </div>
          <div className={`w-1/4 h-10 self-start ${shimmerClass}`}></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
