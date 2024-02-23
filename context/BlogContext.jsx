import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { db } from '../FirebaseConfig';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "blogpost"));

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

    return (
        <BlogContext.Provider value={{ posts, loading }}>
            {children}
        </BlogContext.Provider>
    );
};
