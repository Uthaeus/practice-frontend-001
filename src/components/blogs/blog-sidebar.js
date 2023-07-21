

function BlogSidebar({ topics }) {

    return (
        <div className="blog-sidebar">
            <h3 className="blog-sidebar-title">About</h3>
            <p className="blog-sidebar-text">This is a blog about my journey to becoming a full-stack web developer.</p>

            <h3 className="blog-sidebar-title">Topics</h3>
            <div className="blog-sidebar-topics">
                { topics.map(topic => <p key={topic.id} className="blog-sidebar-topic">{topic.name}</p>) }
            </div>

            <h3 className="blog-sidebar-title">Elsewhere</h3>
            <div className="blog-sidebar-socials">
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-github"></i></a>
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-linkedin"></i></a>
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-twitter"></i></a>
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-instagram"></i></a>
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-facebook"></i></a>
                <a className="blog-sidebar-social" href="www.example.com"><i className="bi bi-youtube"></i></a>
            </div>
        </div>
    );
}

export default BlogSidebar;