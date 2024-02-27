export default function Avatar({ src, className }) {
    return (
        <div className={`avatar`}>
            <div className={`w-24 overflow-hidden ${className}`}>
                <img src={src} alt="Avatar" />
            </div>
        </div >
    );
}
