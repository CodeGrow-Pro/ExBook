import React from 'react'
import BookCart from './BookCart'
import Main from './Main'
import './Product.css'
const Product = () => {
  return (
    <div>
        <section className='shop-card section-p'>
          <div className="card-body">
          <BookCart srcImg="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"
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
                   price="$25.3"/>
          </div>
        </section>
    </div>
  )
}

export default Product