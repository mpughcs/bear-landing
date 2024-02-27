import React, { useState, useEffect, useRef } from 'react';

export default function MailChimpSub({ focusEntry }) {
    const entryBoxRef = useRef(null);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    // Email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    useEffect(() => {
        if (focusEntry) {
            entryBoxRef.current.focus();
            entryBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    }, [focusEntry]);

    // Validate email on change
    useEffect(() => {
        setIsEmailValid(validateEmail(email));
    }, [email]);

    return (
        <form action="https://gmail.us22.list-manage.com/subscribe/post?u=d6d8ccf771e1be4c8ade7d564&amp;id=8a3ba6713a&amp;f_id=005ec2e1f0" method="post" className="form-control w-80" target="_self" noValidate>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
                <div className="join focus:bg-pink-300">
                    <input
                        type="email"
                        ref={entryBoxRef}
                        placeholder="username@site.com"
                        className="input join-item border-4 focus:border-warning"
                        name="EMAIL"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on change
                    />
                    <button type="submit" className="btn btn-primary join-item" disabled={!isEmailValid || !email}>Subscribe</button> {/* Disable button conditionally */}
                </div>
            </fieldset>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_d6d8ccf771e1be4c8ade7d564_8a3ba6713a" tabIndex="-1" />
            </div>
        </form>
    );
}
