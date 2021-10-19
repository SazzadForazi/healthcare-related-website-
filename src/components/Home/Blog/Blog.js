import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/services/main/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blog))
    }, [])
    return (
        <div className='container header'>
            <div className="row">
                {
                    blogs.map(blog => <Blogs

                        key={blog.id}
                        blog={blog}
                    >


                    </Blogs>)
                }
            </div>
        </div>
    );
};

export default Blog;