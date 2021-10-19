import React from 'react';


const Srvice = ({ srvice }) => {
    const { des, img, services } = srvice;
    return (
        <div className='row'>
            <div className="card">
                <img className="w-40 center" src={img} alt="" />
                <h3>Department: {services}</h3>
                <p>{des}</p>
                <button type="button" className="btn btn-success">Details</button>
            </div>

        </div>
    );
};

export default Srvice;