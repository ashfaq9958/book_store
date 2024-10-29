import React from "react";
import Card from "../Card/Card";
import cover_1 from "../../assets/books_cover/cover_1.jpg";
import cover_2 from "../../assets/books_cover/cover_2.jpg";
import cover_3 from "../../assets/books_cover/cover_3.jpg";
import cover_4 from "../../assets/books_cover/cover_4.jpg";
import cover_5 from "../../assets/books_cover/cover_5.jpg";
import cover_6 from "../../assets/books_cover/cover_6.jpg";
const BookList = () => {
  let cardDetails = [
    {
      name: "Ashfaq Ahmad",
      cimg: cover_1,
      desc: "This book is very nice and interesting.",
      year: 2021,
    },
    {
      name: "Marcus Tirson",
      cimg: cover_2,
      desc: "Beneath the Silent Snow-Covered Pines.",
      year: 2020,
    },
    {
      name: "James Merdor",
      cimg: cover_3,
      desc: "Growth in the Chill of Competition",
      year: 2023,
    },
    {
      name: "Mia Jackson",
      cimg: cover_4,
      desc: "In the Shadows of Snowfall and Silence.",
      year: 2017,
    },
    {
      name: "Sahra James",
      cimg: cover_5,
      desc: "Together to the Top: A Hiking Story.",
      year: 2011,
    },
    {
      name: "Sahra James",
      cimg: cover_6,
      desc: "This book is very nice and interesting.",
      year: 2015,
    },
  ];
  return (
    <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 ">
      {cardDetails.map((item) => (
        <div key={item.cimg}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
