import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { useBlog } from '../../context/BlogContext';
import BlogPreview from "../components/BlogPost";
import PostModal from "../components/PostModal";

const defaultImage = "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function BlogOverview() {
    const { posts, loading } = useBlog();
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [showModal, setShowModal] = useState(false); // Assuming you have a state for showModal
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSort, setSelectedSort] = useState('Sort by');

    useEffect(() => {
        let tempPosts = [...posts]; // Create a copy of posts to ensure immutability

        // Apply category filter
        if (categoryFilter !== 'All') {
            tempPosts = tempPosts.filter(post => post.category === categoryFilter);
        }

        // Apply search filter
        if (searchTerm) {
            tempPosts = tempPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        // Apply sorting
        if (selectedSort === 'Newest') {
            tempPosts = tempPosts.sort((a, b) => new Date(b._createdBy.timestamp.toDate()).getTime() - new Date(a._createdBy.timestamp.toDate()).getTime());
        } else if (selectedSort === 'Oldest') {
            tempPosts = tempPosts.sort((a, b) => new Date(a._createdBy.timestamp.toDate()).getTime() - new Date(b._createdBy.timestamp.toDate()).getTime());
        }

        setFilteredPosts([...tempPosts]); // Set state with a new array reference
    }, [posts, categoryFilter, searchTerm, selectedSort]);

    const handleReadMore = () => {
        setShowModal(!showModal);
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <main className="md:p-[4rem] p-[2rem] mx-auto max-w-screen-2xl transition-all duration-150 h-screen">
            <div className="flex flex-row gap-3 flex-wrap">
                <label className="input input-bordered flex items-center gap-2 w-[300px]">
                    <CiSearch className="text-xl" />

                    <input type="text" className="grow" placeholder="title" onChange={handleSearch} />
                </label>
                <div className="pb-6">
                    <select className="select select-ghost w-full max-w-xs" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option>All</option>
                        <option>Development</option>
                        <option>Design</option>
                        <option>Marketing</option>
                    </select>
                </div>
                <div className="pb-6">
                    <select className="select select-ghost w-full max-w-xs" value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                </div>



            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                {loading ? (
                    <h1 className="font-Pacifico">Loading posts...</h1>
                ) : filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <BlogPreview
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            postDate={post._createdBy.timestamp.toDate().toDateString()}
                            createdBy={post._createdBy}
                            headerPhoto={post.headerPhoto ? post.headerPhoto[0].downloadURL : defaultImage}
                            category={post.category}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center">
                        <h2>No posts available.</h2>
                    </div>
                )}
            </section>
        </main>
    );
}
