import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import BlogItem from "../components/blogs/blog-item";
import BlogSidebar from "../components/blogs/blog-sidebar";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [topics, setTopics] = useState([]);
    const { user } = useContext(UserContext);

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
                <div className="blogs-header-content">
                    <h1 className="blogs-title">Welcome to the Jungle</h1>
                    { user?.role === 'site_admin' && (
                        <>
                            <Link to='/blogs/new' className="blogs-header-link">Create New Blog</Link>
                            <Link to='/topics' className="blogs-header-link">All Topics</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="blogs-content">
                <div className="blogs-main">
                    { blogs.map(blog => <BlogItem key={blog.id} blog={blog} />) }
                </div>

                <BlogSidebar topics={topics} />
            </div>
        </div>
    );
}

export default Blogs;