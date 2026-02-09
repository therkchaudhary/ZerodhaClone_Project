import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h2>Open a Zerodha account</h2>
                <p className='mt-4 fs-5 text-muted '>
                    Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
                </p>
                <Link onClick={() => window.scrollTo(0, 0)} className='p-2 btn btn-primary mt-3  mb-3fs-5 hero-btn' style={{ width: "20%", margin: "0 auto" }} to="/signup">Sign up for free</Link>
            </div>

        </div>
    );
}


export default OpenAccount;
