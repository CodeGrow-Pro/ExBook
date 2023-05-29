import React, { useEffect, useState } from "react";
import BookCart from "./BookCart";
import axios from "axios";
import "./Product.css";

const Product = () => {
  let [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = () => {
    axios({
      method: "GET",
      url: "https://exbookapis.onrender.com/ExBook/api/v1/book/getBooks",
    })
      .then((res) => {
        setItem(res.data.allBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    const values = [];
    const filteredValue = []
     items.forEach((ele) => {
      if (ele.name.toLowerCase().match(searchValue.toLowerCase())) {
        filteredValue.push(ele)
      } else {
        values.push(ele);
      }
      setItem([...filteredValue, ...values]);
    });
  };

  return (
    <div>
      <section className="shop-card section-p">
        <div className="search">
          <div className="search-input">
            <form>
              <input
                type="text"
                name="search"
                onChange={handleSearch}
                value={searchValue}
                placeholder="Book Search here"
              />
              <button className='light-btn'>Search</button>
            </form>
          </div>
        </div>
        <div className="card-body">
          {items.map((item) => {
            return <BookCart key={item._id} Item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;
