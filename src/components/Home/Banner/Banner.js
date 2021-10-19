import React from 'react';
import './Banner.css'
const Banner = () => {
    return (

        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h1 className="title">
                            We are here<br /> for your Care
                        </h1>
                        <p className="text-white text-center mt-3">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                        </p>
                        <button className="mt-3 about-btn">Make an appoinment</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>

    );
};

export default Banner;