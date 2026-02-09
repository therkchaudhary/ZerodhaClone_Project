import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container p-3 p-md-5 mb-5'>
            <div className='row text-center'>
                <h1>Open a Zerodha account</h1>
                <p>
                    Modern platform and app, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <Link className='p-3 btn btn-primary fs-5 hero-btn' style={{ width: "20%", margin: "0 auto" }} to="/signup">Sign up for free</Link>
            </div>

        </div>
    );
}


export default OpenAccount;
