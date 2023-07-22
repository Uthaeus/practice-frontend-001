import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BlogItem from "../blogs/blog-item";

function TopicDetail() {
    const [topic, setTopic] = useState({});
    const [blogs, setBlogs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/topics/${id}`)
            .then(res => res.json())
            .then(data => {
                setTopic(data);
                setBlogs(data.blogs);
            })
            .catch(err => console.log('topic error', err));
    }, [id]);

    return (
        <div className="topic-detail">
            <h1>{topic.name}</h1>

            <hr />

            <div className="topic-blogs">
                { blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)}
            </div>

            { <Link to="/topics">Back to Topics</Link> } <Link to="/blogs">Back to Blogs</Link>
        </div>
    );
}

export default TopicDetail;