import React from 'react';
import { Link } from 'react-router-dom';


const Srvice = ({ srvice }) => {
    const { des, img, services, id } = srvice;
    return (
        <div className='row'>

            <div className="card header">

                <img className="w-40 center" src={img} alt="" />
                <h3>Department: {services}</h3>
                <p>{des}</p>
                <Link to={`/details/${id}`}>
                    <button type="button" className="btn btn-success">Details</button>
                </Link>
            </div>

        </div>
    );
};

export default Srvice;