import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-3 p-md-5 mb-5'>
            <div className='row text-center'>
                <img src="media/homeHero.png" alt="Hero Image" className='mb-5' />
                <h1 className='mt-5'>Invest in everthing</h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual, and more
                </p>
                <Link className='p-3 btn btn-primary fs-5 mb-5 hero-btn' style={{ width: "20%", margin: "0 auto" }} to="/signup">Sign up for free</Link>
            </div>

        </div>
    );
}


export default Hero;
