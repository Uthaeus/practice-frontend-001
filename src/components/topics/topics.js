import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../store/user-context";
import TopicItem from "./topic-item";
import TopicForm from "./topic-form";
import { set } from "react-hook-form";

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

    return (
        <div className="topics">
            <h1>Topics</h1>
            {/* move to sidebar */}
            { user?.role === 'site_admin' && <p className="new-topic-link" onClick={() => setShowForm(!showForm)}>Create New Topic</p> }
            <hr />

            <div className="topics-list">
                { topics.map(topic => <TopicItem key={topic.id} topic={topic} deleteHandler={deleteHandler} />) }
            </div>
        </div>
    );
}

export default Topics;