import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function EditBlog() {
    return (
        <div className="edit-blog">
            <h2>Edit Blog</h2>
            <Link to="/blogs">Back to Blogs</Link>

            <BlogForm />
        </div>
    );
}

export default EditBlog;