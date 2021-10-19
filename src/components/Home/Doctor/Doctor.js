import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, title, des, img } = doctor;
    return (
        <div className='row'>
            <div className="card">
                <img className="w-40 center" src={img} alt="" />
                <h3>Name: {name}</h3>
                <h3>{title}</h3>
                <p>{des}</p>
                <button type="button" className="btn btn-success">Booking Now</button>
            </div>

        </div>
    );
};

export default Doctor;