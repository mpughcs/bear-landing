import Markdown from 'react-markdown'

export default function PostModal({ title, content, postDate, createdBy, headerPhoto, category, className, showModal }) {
    return (

        <dialog id="postModal" role='modal' className="modal transition-all duration-150 justify-center mx-auto">
            <div className="modal-box max-w-none  sm:w-[650px] xl:w-[1200px] h-screen">
                <form method="dialog" className='sticky overflow-[0]'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className=" align-middle post h-[150px] mx-auto relative ">

                    <Markdown>{content}</Markdown>

                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-sm max-w-none w-screen"> </div>
        </dialog>


    )
}