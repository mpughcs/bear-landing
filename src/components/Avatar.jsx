export default function Avatar({ src, className }) {
    return (
        <div className={`avatar`}>
            <div className={`w-24 overflow-hidden ${className}`}>
                <img className="object-cover" src={src} alt="Avatar" />
            </div>
        </div >
    );
}
