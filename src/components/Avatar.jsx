export default function Avatar({ src, className }) {
    return (
        <div className={`avatar ${className}`}>
            <div className="w-24 rounded-full overflow-hidden">
                <img className="  scale-[1.7]" src={src} alt="Avatar" />
            </div>
        </div>
    );
}
