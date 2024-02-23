import React from 'react'
import { useState, useEffect, useRef } from 'react';
export default function MailChimpSub({ focusEntry }) {
    const entryBoxRef = useRef(null);


    useEffect(() => {
        if (focusEntry) {
            entryBoxRef.current.focus();
        }
    }, [focusEntry]);



    return (
        <form action="https://gmail.us22.list-manage.com/subscribe/post?u=d6d8ccf771e1be4c8ade7d564&amp;id=8a3ba6713a&amp;f_id=005ec2e1f0" method="post" className="form-control w-80" target="_self" noValidate>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                    <input type="email" ref={entryBoxRef} placeholder="username@site.com" className="input input-bordered join-item" name="EMAIL" required />
                    <button type="submit" className="btn btn-primary join-item">Subscribe</button>
                </div>
            </fieldset>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_d6d8ccf771e1be4c8ade7d564_8a3ba6713a" tabIndex="-1" />
            </div>
        </form>


    )
}

