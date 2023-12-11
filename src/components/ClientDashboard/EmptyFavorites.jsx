import React from "react";

function EmptyFavorites({title, subtitle}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center gap-2">
      <p className="sm:text-3xl text-2xl font-extrabold text-[#010101]">
        {title}
      </p>
      <p className="sm:text-xl text-xl">{subtitle}</p>
    </div>
  );
}

export default EmptyFavorites;
