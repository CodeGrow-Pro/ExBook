import React, { useEffect, useState } from 'react'
import BookCart from './BookCart'
import './Product.css'
import books from '../seeders/books'
const Product = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{
       setBook(books)
  },[])
  const handleSearchChange = (e)=>{
       e.preventDefault()
       const {name,value} = e.target;
      
  }
  return (
    <div>
        <section className='shop-card section-p'>
          <div className="search">
            <div className="search-input">
              <form>
                <input type="text" name="search" onChange={handleSearchChange} placeholder='Book Search here'/>
                <button className='light-btn'>Search</button>
              </form>
            </div>
          </div>
          <div className="card-body">
            {
              book.map((item)=>{
                return <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                title={item.title}
                price="$25.3"/>
              })
            }
          {/* <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                   title="Real Life"
                   price="$25.3"/>
                         <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                   title="Real Life"
                   price="$25.3"/>
                         <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                   title="Real Life"
                   price="$25.3"/>
                         <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
                   title="Real Life"
                   price="$25.3"/> */}
          </div>
        </section>
    </div>
  )
}

export default Product