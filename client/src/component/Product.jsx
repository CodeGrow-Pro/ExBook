import React, { useEffect, useState } from 'react'
import BookCart from './BookCart'
import Main from './Main'
import axios from 'axios'
import './Product.css'

const Product = () => {
  const [items, setItem] = useState([])
  useEffect(()=> {
    fetchBooks();
  }, [])
  const fetchBooks = ()=>{
    axios({
      method: 'GET',
      url: 'http://localhost:8000/ExBook/api/v1/book/getBooks'
    })    
    .then(res => {
      setItem(res.data.allBooks)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <div>
        <section className='shop-card section-p'>
          <div className="search">
            <div className="search-input">
              <form>
                <input type="text" placeholder='Book Search here'/>
                <button className='light-btn'>Search</button>
              </form>
            </div>
          </div>
          <div className="card-body">
            {items.map(item => {
                return (<BookCart 
                    key={item._id}
                    item={item}
                />)
              })}
          </div>
        </section>
    </div>
  )
}

export default Product