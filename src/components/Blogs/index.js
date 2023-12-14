
import React from 'react';
import './index.css';
import Article from '../../assets/Article_Image.png'

import BlogCard from '../Utils/BlogCard';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog Title 1',
      imageUrl: Article,
      publisherName: 'John Doe',
      publisherImage: 'profile-image-url',
      date: 'August 15, 2023',
      duration: '3 Min Read',
    },
    {
      id: 2,
      title: 'Blog Title 2',
      imageUrl: Article,
      publisherName: 'Jane Smith',
      publisherImage: 'profile-image-url',
      date: 'August 10, 2023',
      duration: '2 Min Read',
    },
    {
      id: 3,
      title: 'Blog Title 3',
      imageUrl: Article,
      publisherName: 'Alice Johnson',
      publisherImage: 'profile-image-url',
      date: 'August 5, 2023',
      duration: '4 Min Read',
    },
    {
        id: 1,
        title: 'Blog Title 1',
        imageUrl: Article,
        publisherName: 'John Doe',
        publisherImage: 'profile-image-url',
        date: 'August 15, 2023',
        duration: '3 Min Read',
      },
      {
        id: 2,
        title: 'Blog Title 2',
        imageUrl: Article,
        publisherName: 'Jane Smith',
        publisherImage: 'profile-image-url',
        date: 'August 10, 2023',
        duration: '2 Min Read',
      },
      {
        id: 3,
        title: 'Blog Title 3',
        imageUrl: Article,
        publisherName: 'Alice Johnson',
        publisherImage: 'profile-image-url',
        date: 'August 5, 2023',
        duration: '4 Min Read',
      },
    
  ];

  return (
    <div className="Blogs">
      <div className="title">
        <h1>Our Latest Blogs</h1>
        <p>This is the very long description that if you read it you will die of <br />stomach cramps i am not even joking ahahah!</p>
      </div>

      <div className="grid-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            imageUrl={Article}
            publisherName={blog.publisherName}
            publisherImage={blog.publisherImage}
            date={blog.date}
            duration={blog.duration}
          />
        ))}
      </div>

      <div className='btn-blog-group'>
        <button className="btn blog-btn">More Article</button>
      </div>
      
    </div>
  );
};

export default Blogs;
