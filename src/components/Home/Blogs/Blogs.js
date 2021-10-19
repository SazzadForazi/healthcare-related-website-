import React from 'react';

const Blogs = ({ blog }) => {
    const { date, title, des, img } = blog
    return (
        <div className='card col-lg-4 col-sm-6 col-12'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h3 className='text-danger'>{date}</h3>
            <p><small>{des}</small></p>
        </div>
    );
};

export default Blogs;