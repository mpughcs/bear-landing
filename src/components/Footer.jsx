import MailChimpSub from "./MailChimpSub";

export default function Footer() {
    return (

        <footer className="footer p-10 bg-base-200 text-base-content">
        
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav>
            <MailChimpSub />
            </nav>
        </footer>

    )
}
