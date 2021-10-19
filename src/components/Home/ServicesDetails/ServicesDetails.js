import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServicesDetails.css'
const ServicesDetails = () => {
    const { id, img, services, des } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/services/main/services-fake.json')
            .then(res => res.json())
            // .then(data => setData(data))
            .then(data => setData(data.services))
    }, [])
    const details = data.filter(td => td.id == id);
    // console.log(details);
    return (
        <div className='header'>
            <div className="card header">
                <img className="w-40 center" src={details[0]?.img} alt="" />
                <h3>Department: {details[0]?.services}</h3>
                <p>{details[0]?.des}</p>
            </div>

        </div>
    );
};

export default ServicesDetails;