import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Srvice from '../Srvice/Srvice';

import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/services/main/services-fake.json')
            .then(res => res.json())
            .then(data => setServices(data.services));
    }, [])
    return (


        <div className='service-container'>

            {
                services.map(srvice => <Srvice
                    key={srvice.id}
                    srvice={srvice}
                >
                </Srvice>)
            }

        </div>
    );


};

export default Services;