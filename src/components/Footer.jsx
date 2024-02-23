import MailChimpSub from "./MailChimpSub";
import ContactModal from "./ContactModal";
import React, { useEffect, useRef } from 'react';


export default function Footer({ focusEntry }) {
    const entryBoxRef = useRef(null);


    return (
        <div className="w-screen bg-base-200  ">

            <footer className="footer p-4 md:p-10 text-base-content justify-start gap-10 max-w-screen-2xl mx-auto ">

                <nav className="">
                    <h6 className="footer-title">Bear</h6>

                    <a className="link link-hover" href="/blog">Blog</a>
                    <a className="link link-hover" href="/">About</a>

                    {/* <a className="link link-hover" onClick={() => document.getElementById('my_modal_5').showModal()} >Contact</a> */}

                </nav>

                <nav>
                    <MailChimpSub focusEntry={focusEntry} />
                </nav>
            </footer>
        </div>

    )
}
