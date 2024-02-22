import React from 'react'
import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'
import PostModal from './PostModal';
import { useState } from 'react';







export default function BlogPreview({ title, content, postDate, createdBy, headerPhoto, category }) {
    console.log('headerPhoto', headerPhoto);
    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState('');

    const handleReadMore = () => {
        document.getElementById('postModal').showModal();

    }


    return (
        <>

            <PostModal title={title} content={content} postDate={postDate} createdBy={createdBy} headerPhoto={headerPhoto} category={category} showModal={showModal} />
            <div className="card w-96 bg-base-200 shadow-xl  transition-all duration-150 ">
                <figure><img src={headerPhoto} alt="headphoto" className="h-[250px] object-cover w-[100%]" /></figure>
                <div className="badge absolute bg-primary border-none m-2">{category}</div>

                <div className='p-4'>

                    <p className="card-title w-[80%] ">{title}</p>
                    <span className="flex flex-row gap-2">
                        <p className="text-xs justify-self-end w-fit text-nowrap">{createdBy}</p>
                        <p className="text-xs">{postDate}</p>
                    </span>

                    <div className=" align-middle post h-[150px]  ">

                        <Markdown>{content}</Markdown>

                    </div>
                </div>
                <form method="dialog" className="card-actions absolute bottom-0 right-0 justify-end m-3">
                    <button className="btn btn-primary" onClick={handleReadMore} >Read More</button>
                </form>
            </div >
        </>
    );
}
