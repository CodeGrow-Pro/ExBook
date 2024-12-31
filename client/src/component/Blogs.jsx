import React from 'react'
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa'
import './Blogs.css'
import AdBanner from './AdBanner'
const Blogs = () => {
  const data = [
    {
      "image": "https://tse2.mm.bing.net/th?id=OIP.2nTh8lSVC00X9ZRuLiF3ogHaEK&pid=Api",
      "title": "Knives Out Reimagined as a Rom-Com in Fun New Trailer",
      "desc": "This blog discusses a new holiday rom-com twist on the popular 'Knives Out' film, featuring a rivals-to-lovers romance-mystery plot. The author shares how this new interpretation brings humor and heart, blending suspense with festive cheer. The blog covers key plot details, character arcs, and the behind-the-scenes magic that made this fresh take so captivating. It explores the genre crossover, the ensemble cast, and its potential appeal to fans of both rom-coms and mystery thrillers. The post includes insights on casting decisions and director influences, with quotes from critics and early screenings. The blog also mentions the film's positive reception, indicating strong box office prospects. Its blend of intrigue and romance is highlighted as a major selling point for holiday viewing.",
      "date": "2024-12-31"
    },
    {
      "image": "https://tse4.mm.bing.net/th?id=OIP.6cPwzmeWdUD1WFLpLpAL4QHaLL&pid=Api",
      "title": "The Best New Books to Read: Top Releases, Updated Weekly",
      "desc": "This blog serves as a curated guide to the best new book releases every week. Featuring upcoming titles like 'Money for Couples' by Ramit Sethi and 'Trial by Ambush' by Marcia Clark, it gives readers a sneak peek into the latest works that are gaining attention. Each post provides detailed synopses of the books, discusses the author's background, and highlights why these titles are generating buzz. The blog's focus is on giving readers the information they need to stay updated with the freshest literary offerings. Genres span from business and self-help to legal thrillers and contemporary fiction, ensuring there's something for every type of reader.",
      "date": "2024-12-29"
    },
    {
      "image": "https://tse2.mm.bing.net/th?id=OIP.M4VRu3UUkjepwUNdlxOopQHaEK&pid=Api",
      "title": "21 Best Books of 2024 to Read Right Now",
      "desc": "This blog presents a list of the 21 best books of 2024 that every reader should pick up. From Emily Nussbaum's exploration of reality TV to Lev Grossman's Arthurian fantasy, the blog highlights the most anticipated literary works. The post breaks down these books by genre, offering a range from deep intellectual essays to lighthearted novels, ensuring diverse tastes are catered to. It includes expert reviews and discusses why these books are top picks for the year. The blog also provides recommendations for readers interested in particular themes or literary styles, alongside the author's voice and their influence on contemporary literature.",
      "date": "2024-12-28"
    },
    {
      "image": "https://tse2.mm.bing.net/th?id=OIP.pJPbRl5qIzr4iikBZmu0_wHaPj&pid=Api",
      "title": "PEOPLE Picks the Best 10 Books of 2024",
      "desc": "In this blog, PEOPLE's Senior Books Editor selects the top 10 books of 2024, with an emphasis on celebrity memoirs, true stories, and impactful literary fiction. Each book is accompanied by an in-depth analysis of its narrative and significance in today's cultural landscape. The post delves into how these books are reflective of current societal trends and explores the authors' personal journeys and insights. The blog also touches on themes like social justice, politics, and identity, making it a must-read for anyone interested in contemporary issues as told through the lens of powerful storytelling. It’s a great resource for book lovers looking for both entertainment and enlightenment.",
      "date": "2024-12-27"
    },
    {
      "image": "https://tse3.mm.bing.net/th?id=OIP.QOHhWFuRU6exwoTxxiCtKQAAAA&pid=Api",
      "title": "The 22 New Cookbooks I'm Cooking From This Fall",
      "desc": "A food writer shares her picks for the best new cookbooks to try this fall, providing recommendations that emphasize innovative recipes, new cooking techniques, and unique culinary perspectives. The blog features a detailed overview of each cookbook, including key highlights, recipe previews, and suggestions on how to incorporate these books into daily meals. The post also touches on the authors' culinary backgrounds and what makes each book stand out in the competitive food writing space. Whether you're a beginner cook or an experienced chef, this blog offers insight into how these books can inspire your cooking this season.",
      "date": "2024-12-26"
    },
    {
      "image": "https://tse4.mm.bing.net/th?id=OIP.S2xcD2AtNlSdEuueHut_EwHaE8&pid=Api",
      "title": "Top Book Bloggers to Follow in 2024",
      "desc": "This blog offers a curated list of the best book bloggers to follow in 2024. Featuring personalities like Pages Unbound, Rebbie Reviews, and Spells & Spaceships, the blog explores their individual styles, the types of books they review, and why they stand out in the book blogging community. The post includes a breakdown of each blogger’s influence, including audience demographics and the specific genres they focus on. This blog serves as a great resource for readers looking for book recommendations, while also supporting the bloggers who provide honest and insightful reviews on a regular basis.",
      "date": "2024-12-25"
    },
    {
      "image": "https://tse1.mm.bing.net/th?id=OIP.B0sBR6wh1JMRCXWCfebEuwHaKS&pid=Api",
      "title": "Little Bird Book Blog",
      "desc": "The Little Bird Book Blog is a space for book lovers to explore personal thoughts, in-depth reviews, and insightful discussions on a wide range of books. From contemporary fiction to fantasy, the blog provides a thoughtful reflection on themes, characters, and storylines. It encourages readers to share their own experiences with books, creating a sense of community around the love of reading. The post includes personal book recommendations based on recent reads, as well as an overview of what makes a book truly memorable. It’s a fantastic resource for anyone looking for detailed and heartfelt reviews.",
      "date": "2024-12-24"
    },
    {
      "image": "https://tse3.mm.bing.net/th?id=OIP.Ibn_4pSoLo-qD_-LarN2fQHaHa&pid=Api",
      "title": "Pretty Little Memoirs - Award-Winning Book Blog",
      "desc": "Pretty Little Memoirs is an award-winning book blog known for its engaging and thoughtful reviews on a variety of genres, including enemies-to-lovers romances, young adult fiction, and much more. The blog highlights key story elements, such as plot twists and character development, offering readers an inside look at the books it features. In addition to reviews, the blog discusses literary trends and what makes a book stand out in the current market. This blog is ideal for readers who want a deeper understanding of their favorite genres, with the added bonus of recommendations for future reads.",
      "date": "2024-12-23"
    },
    {
      "image": "https://tse2.mm.bing.net/th?id=OIP.q0C57c3yKXY-aieh6ehMawHaHa&pid=Api",
      "title": "Maryse's Book Blog - Following My Heart, One Book at a Time",
      "desc": "Maryse's Book Blog is a personal blog offering honest reviews, recommendations, and insights into a variety of books, from contemporary romance to thrillers. The author shares her reading journey, reflecting on how books influence her life and emotions. The blog’s heartwarming and authentic tone resonates with readers, offering them a place to find both popular and niche book recommendations. It’s also a hub for book giveaways and author interviews, giving fans an inside look at the writing process and upcoming releases. This blog is perfect for those who want a mix of book insights and community.",
      "date": "2024-12-22"
    },
    {
      "image": "https://tse2.mm.bing.net/th?id=OIP.PQ50Xy9DA-94FGUGvgvw7QHaNK&pid=Api",
      "title": "The Best Book Review Blogs in 2024",
      "desc": "A comprehensive guide to the best book review blogs in 2024, offering readers a wealth of resources across genres. The blog features top sites like Book Riot and Reedsy, which provide insightful reviews, reading challenges, and author interviews. It also highlights niche book blogs focused on specific genres such as fantasy, romance, and historical fiction. The post includes the unique contributions each blog makes to the book community, making it a helpful tool for readers and writers alike. Whether you're looking for recommendations or simply love reading book discussions, this blog is a must-follow.",
      "date": "2024-12-21"
    }
  ]
  
  return (
    <div>
      <section className='blogs section-p'>
        {data?.map((it) => {
          return <div className='blog-body'>
            <div className="blog-img">
              <img src={it.image} alt="" />
            </div>
            <div className="blog-details">
              <div className="blog-content">
                <h1 className='heading-h1 '>{it.title}</h1>
                <p>{it.desc}</p>
              </div>
              <div className="blog-info">
                <span><FaCalendar></FaCalendar></span>
                <p>{it.date}</p>
                {/* <span><FaUser></FaUser></span>
                <p>By Johne Doe</p> */}
                {/* <span><FaComment></FaComment></span>
                <p>20</p> */}
              </div>
            </div>
          </div>
        })}
      </section>
      <AdBanner />
    </div>
  )
}

export default Blogs