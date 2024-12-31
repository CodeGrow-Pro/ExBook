import React, { useEffect, useState } from "react";
import "./Main.css";
import "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import BookCart from "./BookCart";
import axios from "axios";
const Main = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = () => {
    axios({
      method: "GET",
      url: "https://exbookapis.onrender.com/ExBook/api/v1/book/getBooks",
    })
      .then((res) => {
        const item = res.data.allBooks;
        const len = res.data.allBooks.length - 1;
        setItem([item[len], item[len - 1], item[len - 2], item[len - 3]]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="recomend section-p">
        <div className="title heading-h1">
          <h1>Recomended For You</h1>
          <p>
            Explore a curated selection of books tailored to your unique reading preferences and past purchases. Discover hidden literary treasures and handpicked recommendations that align with your interests, offering you a personalized and engaging reading experience.
          </p>
        </div>
        <div className="slider">
          <div className="card-body">
            {items.map((item) => {
              return <BookCart key={item._id} Item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
