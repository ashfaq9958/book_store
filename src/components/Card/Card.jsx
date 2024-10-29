import React from "react";

const Card = ({ item: { name, cimg, desc, year } }) => {
  return (
    <div className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 m-10 cursor-pointer">
      {/* Image */}
      <img
        src={cimg}
        alt="Book Cover"
        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
      />

      {/* Details (Hidden initially) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 gap-y-3 transition-opacity duration-300 text-white p-4">
        <h1 className="text-2xl font-semibold ">{name}</h1>
        <p className="text-sm text-center">{desc}</p>
        <p className="text-sm text-center">Release: {year}</p>
      </div>
    </div>
  );
};

export default Card;
