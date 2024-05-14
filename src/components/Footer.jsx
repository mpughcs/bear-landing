import MailChimpSub from "./MailChimpSub";
import ContactModal from "./ContactModal";
import React, { useEffect, useRef } from 'react';
import ico from '/ico.png';


export default function Footer({ focusEntry }) {


    return (
        <div className="w-screen bg-base-200  pb-[100px]">

            {/* <footer className="footer p-4 md:p-10 text-base-content justify-start gap-10 max-w-screen-2xl mx-auto m ">

                <nav className="">
                    <h6 className="footer-title">Bear</h6>

                    <a className="link link-hover" href="/blog">Blog</a>
                    <a className="link link-hover" href="/about-us">About Us</a>
                    <a className="link link-hover" href="/privacy-policy">Privacy Policy</a>

                    {/* <a className="link link-hover" onClick={() => document.getElementById('my_modal_5').showModal()} >Contact</a> */

                //     </nav>

                //     <nav>
                //         <MailChimpSub focusEntry={focusEntry} />
                //     </nav>
                // </footer>
                // */
            }
            <footer class="footer p-10 text-base-content items-baseline">
                <aside>
                    <img src={ico} alt="logo" className="w-10 h-10" />
                    <p>Gift with Bear LLC, Copyright @ 2024</p>
                </aside>
                <nav>
                    <h6 class="footer-title">Info</h6>
                    <a className="link link-hover" href="/blog">Blog</a>
                    <a className="link link-hover" href="/about-us">About Us</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Company</h6>
                    <a className="link link-hover" href="/contact">Contact</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Legal</h6>
                    <a class="link link-hover" href="/terms">Terms of Service</a>
                    <a class="link link-hover" href="/privacy-policy">Privacy policy</a>
                </nav>
                <nav>
                    <MailChimpSub focusEntry={focusEntry} />
                </nav>
            </footer>

        </div>

    )
}
