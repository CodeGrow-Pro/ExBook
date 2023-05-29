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
            Welcome to ExBook, your one-stop destination for all your book
            needs. Explore our vast collection of books, spanning various genres
            and authors. Immerse yourself in captivating blog posts, insightful
            reviews, and engaging author interviews. Join our passionate
            community of book enthusiasts and embark on a literary journey like
            no other.
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
