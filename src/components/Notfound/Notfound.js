import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img src={notfound} alt="" /> <br />
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default Notfound;