import { useState, useEffect } from "react";

import BlogItem from "../components/blogs/blog-item";
import BlogSidebar from "../components/blogs/blog-sidebar";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log('blogs error', err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:4000/topics')
            .then(res => res.json())
            .then(data => setTopics(data))
            .catch(err => console.log('topics error', err));
    }, []);

    return (
        <div className="blogs">
            <div className="blogs-header">
                <h1>Blogs</h1>
            </div>

            <div className="blogs-content">
                <div className="blogs-main">

                </div>

                <BlogSidebar topics={topics} />
            </div>
        </div>
    );
}

export default Blogs;