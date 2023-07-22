import { set, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function BlogForm({ blog }) {
    const { register, handleSubmit, errors, reset } = useForm();
    const [topics, setTopics] = useState([]);
    const [method, setMethod] = useState('POST');
    const [url, setUrl] = useState('http://localhost:4000/blogs');
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            reset({
                title: blog.title,
                body: blog.body,
                topic: blog.topic_id
            });
            setMethod('PUT');
            setUrl(`http://localhost:4000/blogs/${blog.id}`);
        }
    }, [blog, reset]);

    useEffect(() => {
        fetch('http://localhost:4000/topics')
            .then(res => res.json())
            .then(data => setTopics(data))
            .catch(err => console.log('topics error', err));
    }, []);

    function submitHandler(data) {
        let dataToSend = {
            blog: {
                title: data.title,
                body: data.body,
                topic_id: data.topic
            }
        };

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                navigate('/blogs');
            })
            .catch(err => console.log('blog create error', err));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="blog-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', { required: true })} />
                {errors?.title && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <select className="form-control" {...register('topic', { required: true })}>
                    <option value="">Select a topic</option>
                    { topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>) }
                </select>
                {errors?.topic && <span className="error">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" {...register('body', { required: true })} />
                {errors?.body && <span className="error">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
}

export default BlogForm;