import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import TopicItem from "./topic-item";
import TopicForm from "./topic-form";
import BlogSidebar from "../blogs/blog-sidebar";

function Topics() {
    const [topics, setTopics] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/topics')
            .then(res => res.json())
            .then(data => setTopics(data))
            .catch(err => console.log('topics error', err));
    }, []);

    function deleteHandler(id) {
        let filteredTopics = topics.filter(topic => topic.id !== id);

        fetch(`http://localhost:4000/topics/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
            .then(response => {
                if (response.ok) {
                    setTopics(filteredTopics);
                    return response.json();
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log('delete topic error', err));
    }

    function addTopicHandler(topic) {
        setTopics([...topics, topic]);
    }

    return (
        <div className="topics">
            <div className="topics-main">
                <h1 className="topics-title">Topics</h1>
                
                { user?.role === 'site_admin' && <p className="topic-link" onClick={() => setShowForm(!showForm)}>Create New Topic</p> }

                { showForm && (
                    <>
                        <TopicForm addTopicHandler={addTopicHandler} />
                        <p onClick={() => setShowForm(!showForm)} className="form-close">close</p>
                    </>
                )}

                <div className="topics-list">
                    { topics.map(topic => <TopicItem key={topic.id} topic={topic} deleteHandler={deleteHandler} />) }
                </div>

                <Link to='/blogs' className="topic-link">Back to Blogs</Link>
            </div>

            <BlogSidebar topics={topics} />
        </div>
    );
}

export default Topics;