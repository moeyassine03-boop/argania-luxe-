import React, { useState } from 'react';

const BeautyAffiliateLandingPage = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating an email submission
        setSuccess(true);
        setEmail('');
    };

    return (
        <div className="landing-page">
            <h1>Join Our Beauty Revolution</h1>
            <form onSubmit={handleSubmit} aria-label="Email Capture Form">
                <label htmlFor="email">Subscribe for updates:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    className="email-input"
                    placeholder="Enter your email"
                />
                <button type="submit" className="submit-button">Subscribe</button>
            </form>
            {success && <p className="success-message">Thank you for subscribing!</p>}
            <style jsx>{`
                .landing-page { 
                    text-align: center; 
                    transition: all 0.3s ease; 
                }
                .email-input {
                    padding: 10px;
                    transition: border-color 0.3s;
                }
                .email-input:focus {
                    border-color: #6D3F8E;
                }
                .submit-button:hover {
                    background-color: #6D3F8E;
                    color: white;
                    transition: background-color 0.3s;
                }
                .success-message {
                    color: green;
                    margin-top: 10px;
                }
            `}</style>
        </div>
    );
};

export default BeautyAffiliateLandingPage;
