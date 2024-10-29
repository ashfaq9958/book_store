import React, { useState } from "react";
import img from "../../assets/books_cover/side.png";

const AddBooks = () => {
  const [formDetails, setformDetails] = useState({
    name: "",
    author: "",
    genre: "",
    release: "",
  });

  const handleForm = (event) => {
    let { name, value } = event.target;
    setformDetails((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formDetails);
  return (
    <div className="md:h-screen w-full flex flex-col md:flex-row justify-between items-center bg-gray-100 mt-10">
      <div className="h-[50%] md:h-[100%] w-full md:w-[60%] mb-6 md:mb-0 bg-white shadow-md p-4 flex justify-center items-center">
        <img src={img} alt="Book cover" className="h-full  object-contain" />
      </div>

      <div className="w-full md:w-[40%] p-3 md:p-8 space-y-3 sm:-mt-4 ">
        <h1 className="sm:text-2xl text-base font-semibold text-gray-800 mb-8 text-center lg:text-left">
          Add New Book
        </h1>
        <form className="space-y-10">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Book Name
            </label>
            <input
              onChange={handleForm}
              type="text"
              name="name"
              value={formDetails.name}
              id="name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter book name"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-gray-600 font-medium mb-2"
            >
              Author Name
            </label>
            <input
              onChange={handleForm}
              type="text"
              name="author"
              value={formDetails.author}
              id="author"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author name"
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-gray-600 font-medium mb-2"
            >
              Genre
            </label>
            <input
              onChange={handleForm}
              type="text"
              name="genre"
              value={formDetails.genre}
              id="genre"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter genre"
            />
          </div>
          <div>
            <label
              htmlFor="releaseDate"
              className="block text-gray-600 font-medium mb-2"
            >
              Release Date
            </label>
            <input
              onChange={handleForm}
              type="text"
              name="release"
              id="releaseDate"
              value={formDetails.release}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter release date"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 mt-8 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
