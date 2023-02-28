import React, { useEffect, useState } from 'react'
import './Main.css'
import 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
import BookCart from './BookCart'
import axios from 'axios'
const Main = () => {
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
          const item = res.data.allBooks;
          const len = res.data.allBooks.length - 1
         setItem([item[len],item[len-1],item[len-2],item[len-3]])
       })
       .catch((err) => {
         console.log(err);
       })
     }
  return (
    <div>
      <div className="recomend section-p">
          <div className='title heading-h1'>
            <h1>Recomended For You</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          <div className="slider">
                <div className="card-body">
                {items.map(item => {
                    return (<BookCart 
                         key={item._id}
                         Item={item}
                     />)
              })}
                </div>
          </div>
      </div>
    </div>
  )
}

export default Main