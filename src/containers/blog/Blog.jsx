import React from 'react'
import './blog.css'; 
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from './imports'



const Blog = () => {
  return (
    <div>
      <div className="zanah_blog section__padding" id="blog">
          <div className="zanah__blog-heading">
            <h1 className="gradient__text">Alot is happing and we are blogging about it</h1>
          </div>
          <div className="zanah__blog-container">
            <div className="zanah__blog-container_groupA">
              <Article imgUrl={blog01} date='Sep 26, 2021' title='Zanah Tech In the IT news'/>
            </div>
         
          <div className="zanah__blog-container_groupB">
        <Article imgUrl={blog02} date='Sep 26, 2022' title='Zanah Tech In the IT news'/>
        <Article imgUrl={blog03} date='Sep 26, 2023' title='Zanah Tech In the Blogger news'/>
        <Article imgUrl={blog04}date='Sep 26, 2024' title='Zanah Tech In the tech news'/>
        <Article imgUrl={blog05} date='Sep 26, 2025' title='Zanah Tech In the iot news'/>
          </div>
          </div>

      </div>
      
    </div>
  )
}

export default Blog
