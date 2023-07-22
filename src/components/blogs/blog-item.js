import { Link } from 'react-router-dom';

function BlogItem({ blog }) {
    let date = new Date(blog.created_at);
    let timeAgo = date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    function truncate(str) {
        return str.length > 60 ? str.substring(0, 58) + '...' : str;
    }

    return(
        <div className="blog-item">
            <Link to={`/blogs/${blog.id}`} className='blog-item-title'>{blog.title}</Link>
            <p className="blog-item-date">Posted: {timeAgo}</p>
            <p className='blog-item-body'>{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;