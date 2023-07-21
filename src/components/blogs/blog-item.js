
function BlogItem({ blog }) {

    return(
        <div className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
}

export default BlogItem;