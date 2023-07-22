import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import BlogForm from "./blog-form";

function EditBlog() {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.log('blog error', err));
    }, [id]);

    return (
        <div className="edit-blog">
            <h2>Edit Blog</h2>
            <Link to="/blogs">Back to Blogs</Link>

            <BlogForm blog={blog} />
        </div>
    );
}

export default EditBlog;