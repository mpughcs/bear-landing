import MailChimpSub from "./MailChimpSub";

export default function Footer() {
    return (

        <footer className="footer p-4 md:p-10 bg-base-100 text-base-content justify-start gap-10 max-w-screen-2xl mx-auto border-t-2">

            <nav className="">
                <h6 className="footer-title">Bear</h6>

                <a className="link link-hover" href="/blog">Blog</a>
                <a className="link link-hover" href="/">About</a>

                {/* <a className="link link-hover" onClick={() => document.getElementById('my_modal_5').showModal()} >Contact</a> */}

            </nav>

            <nav>
                <MailChimpSub />
            </nav>
        </footer>

    )
}
