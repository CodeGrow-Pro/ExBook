import React from 'react'
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa'
import './Blogs.css'
import AdBanner from './AdBanner'
const Blogs = () => {
  return (
    <div>
      <section className='blogs section-p'>
        <div className='blog-body'>
          <div className="blog-img">
            <img src="https://bookland.dexignzone.com/react/demo/static/media/blog2.d365a1708a9953ac64e3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <div className="blog-content">
              <h1 className='heading-h1 '>The library is inhabited by spirits that come out of the pages.</h1>
              <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
            </div>
            <div className="blog-info">
              <span><FaCalendar></FaCalendar></span>
              <p>7 March, 2022</p>
              <span><FaUser></FaUser></span>
              <p>By Johne Doe</p>
              <span><FaComment></FaComment></span>
              <p>20</p>
            </div>
          </div>
        </div>
        <div className='blog-body'>
          <div className="blog-img">
            <img src="https://bookland.dexignzone.com/react/demo/static/media/blog2.d365a1708a9953ac64e3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <div className="blog-content">
              <h1 className='heading-h1 '>The library is inhabited by spirits that come out of the pages.</h1>
              <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
            </div>
            <div className="blog-info">
              <span><FaCalendar></FaCalendar></span>
              <p>7 March, 2022</p>
              <span><FaUser></FaUser></span>
              <p>By Johne Doe</p>
              <span><FaComment></FaComment></span>
              <p>20</p>
            </div>
          </div>
        </div>
        <div className='blog-body'>
          <div className="blog-img">
            <img src="https://bookland.dexignzone.com/react/demo/static/media/blog2.d365a1708a9953ac64e3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <div className="blog-content">
              <h1 className='heading-h1 '>The library is inhabited by spirits that come out of the pages.</h1>
              <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
            </div>
            <div className="blog-info">
              <span><FaCalendar></FaCalendar></span>
              <p>7 March, 2022</p>
              <span><FaUser></FaUser></span>
              <p>By Johne Doe</p>
              <span><FaComment></FaComment></span>
              <p>20</p>
            </div>
          </div>
        </div>
        <div className='blog-body'>
          <div className="blog-img">
            <img src="https://bookland.dexignzone.com/react/demo/static/media/blog2.d365a1708a9953ac64e3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <div className="blog-content">
              <h1 className='heading-h1 '>The library is inhabited by spirits that come out of the pages.</h1>
              <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
            </div>
            <div className="blog-info">
              <span><FaCalendar></FaCalendar></span>
              <p>7 March, 2022</p>
              <span><FaUser></FaUser></span>
              <p>By Johne Doe</p>
              <span><FaComment></FaComment></span>
              <p>20</p>
            </div>
          </div>
        </div>
      </section>
      <AdBanner />
    </div>
  )
}

export default Blogs