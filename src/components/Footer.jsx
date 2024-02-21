import MailChimpSub from "./MailChimpSub";

export default function Footer() {
    return (

        <footer className="footer p-4 md:p-10 bg-base-200 text-base-content justify-start gap-10">

            <nav className="">
                <h6 className="footer-title">Company</h6>

                <a className="link link-hover">About us</a>
                <a className="link link-hover" onClick={() => document.getElementById('my_modal_5').showModal()} >Contact</a>

            </nav>

            <nav>
                <MailChimpSub />
            </nav>
        </footer>

    )
}
