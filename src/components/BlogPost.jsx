import React from 'react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'

import PostModal from './PostModal';

export default function BlogPreview({ title, content, postDate, createdBy, headerPhoto, category }) {
    console.log('headerPhoto', headerPhoto);
    const [showModal, setShowModal] = useState(false);

    const handleReadMore = () => {
        setShowModal(true);
    }

    return (
        <div className='rounded-b-2xl'>
            <PostModal
                title={title}
                content={content}
                postDate={postDate}
                createdBy={createdBy}
                headerPhoto={headerPhoto}
                category={category}
                showModal={showModal}
                onClose={() => setShowModal(false)
                } />
            {/* for grid layout with mosaic */}
            <div className="card bg-base-200 shadow-2xl transition-all duration-150 md:max-w-[420px] w-full rounded-b-3xl">
                <figure><img src={headerPhoto
                    ? headerPhoto
                    : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="headphoto" className="h-[250px] object-cover w-full" /></figure>
                <div className="badge absolute bg-primary border-none m-2 text-slate-50">{category}</div>
                <div className='p-4 absolute bottom-0 text-slate-50 drop-shadow-md'>
                    <p className="card-title w-[60%] ">{title}</p>
                    <span className="flex flex-row gap-2">

                        <p className="text-xs justify-self-end w-fit text-nowrap">{createdBy.displayName}</p>
                        <p className="text-xs">{postDate}</p>
                    </span>
                </div>
                <form method="dialog" className="card-actions absolute bottom-0 right-0 justify-end m-3">
                    <button className="btn btn-sm btn-primary" onClick={handleReadMore}>Read More</button>
                </form>
            </div>


        </div>
    );
}

