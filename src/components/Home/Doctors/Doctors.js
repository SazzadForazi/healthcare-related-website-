import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/services/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])
    return (
        <div>
            <div className="heading">
                <h1>Our Qualified Doctors</h1>
                <p><small>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</small></p>
            </div>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;