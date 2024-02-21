import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import BlogPost from "../components/BlogPost";

export default function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "blogpost")); // Make sure "blogposts" matches your collection name
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedPosts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(fetchedPosts);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching posts:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    console.log(posts);

    return (
        <main className="p-[2rem]">
            <h1 className="pb-7">Blog</h1>
            <section className=" flex gap-4">
                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    posts.map((post) => (
                        <BlogPost
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            postDate={post._createdBy.timestamp.toDate().toDateString()}
                            createdBy={post._createdBy.displayName}
                            headerPhoto={post.headerPhoto ? post.headerPhoto[0].downloadURL : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                            category={post.category}

                        />
                    ))

                )}
            </section>
        </main>
    );
}
