import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function NewBlog() {
    return (
        <div className="edit-blog">
            <h2>New Blog</h2>
            <Link to="/blogs">Back to Blogs</Link>

            <BlogForm />
        </div>
    );
}

export default NewBlog;