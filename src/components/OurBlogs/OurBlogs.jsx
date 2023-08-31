import React from 'react'
import styles from './OurBlogs.module.css'
import blogData from '../../utils/blogData'
const OurBlogs = () => {
    return (
        <div className={styles.ourBlogs}>
            <div className={styles.ourBlogs__title}>
                Our Latest Blogs
            </div>
            <div className={styles.ourBlogs__subtitle}>
                This is the very long description that if you read it you will die of stomach cramps i am not even joking ahahah!
            </div>
            <div className={styles.ourBlogs__cards}>
                {blogData.map((blog) => (
                    <div className={styles.ourBlogs__card} key={blog.id}>
                        <div className={styles.ourBlogs__cardImage}>
                            <img src={blog.image} alt="blog" />
                        </div>
                        <div className={styles.ourBlogs__cardTitle}>
                            {blog.title}
                        </div>
                        <div className={styles.ourBlogs__cardAuthor}>
                            <div className={styles.ourBlogs__cardAuthorImage}>
                                <img src={blog.avatar} alt="author" />
                            </div>
                            <div className={styles.ourBlogs__cardAuthorDetails}>
                                <div className={styles.ourBlogs__cardAuthorName}>
                                    {blog.author}
                                </div>
                                <div className={styles.ourBlogs__cardAuthorDate}>
                                    {blog.date} ∙ {blog.time}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurBlogs
