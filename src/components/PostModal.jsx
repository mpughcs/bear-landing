import Markdown from 'react-markdown'
import Avatar from './Avatar';

export default function PostModal({ title, content, postDate, createdBy, headerPhoto, category, className, showModal, onClose }) {
    if (!showModal) return null;

    return (
        <dialog id="postModal" role='modal' className="modal modal-open transition-all duration-150 justify-center mx-auto">
            <div className="modal-box max-w-none  sm:w-[650px] xl:w-[1200px] h-screen relative">
                <h1 className='text-secondary' >{category}</h1>
                <form method="dialog sticky top-0">
                    <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className=" align-middle post h-[150px] mx-auto relative ">
                    <figure className="h-[300px] w-full">
                        <img src={headerPhoto
                            ? headerPhoto
                            : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="headphoto" className="h-[300px] object-cover w-full" />
                    </figure>
                    <div className='p-4 absolute bottom-10 text-slate-50 drop-shadow-xl'>
                        <p className="card-title w-[60%] ">{title}</p>

                    </div>
                    <span className="flex flex-row gap-2 relative ">
                        <img src={createdBy.photoURL} alt={createdBy.displayName} className={"scale-[.7] rounded-full absolute top-[-60px] left-[-10px]"} />

                        <p className=" text-xs w-fit text-nowrap text-secondary pl-[90px]">{createdBy.displayName}</p>
                        <p className="text-xs">{postDate}</p>
                    </span>

                    <div className='pt-5'>
                        <Markdown className="pb-10 pt-0 mt-0">{content}</Markdown>
                    </div>

                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-sm max-w-none w-screen"> </div>
        </dialog>


    )
}