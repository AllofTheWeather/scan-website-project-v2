import React, { useRef } from 'react';
import { ContactUs } from './ContactForm';

export const Contact = () => {

    return (
        <>        
        <div className="container mt-4">
            <div className="bg-subtle m-5">
                <div class="card">
                <div class="card-header">
                    <div className="container mt-3 mb-3">

                    <h5 class="card-title display-5">Enquires</h5>
                    <p class="card-text mt-3">Please get in touch if you have any questions</p>
                    </div>
                </div>
                
                <div class="card-body">
                    <ContactUs />
                </div>
                <div className="card-footer">
                    <a href="/">return home</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}