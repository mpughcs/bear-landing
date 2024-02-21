import React from 'react'
import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'

export default function BlogPost({ title, content, postDate, createdBy, headerPhoto, category }) {
    console.log('headerPhoto', headerPhoto);
    return (
        <div className="card w-96 bg-base-200 shadow-xl">

            <figure><img src={headerPhoto} alt="headphoto" className="h-[250px] object-cover w-[100%]" /></figure>
            <div class="badge absolute bg-primary border-none m-2">{category}</div>
            <div className="card-header p-3 flex flex-row items-baseline justify-between gap-2 w-[100%]">
                <span className="flex flex-row items-baseline gap-2">
                    <p className="card-title">{title}</p>
                    <p className="text-xs">{postDate}</p>
                </span>
                <p className="text-xs justify-self-end ">{createdBy}</p>
            </div>
            <div className="p-3 align-middle">
                <Markdown>{content}</Markdown>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
}
