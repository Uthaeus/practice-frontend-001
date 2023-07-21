import { useForm } from "react-hook-form";

function TopicForm({ addTopicHandler }) {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        let dataToSend = {
            topic: {
                name: data.name
            }
        };

        fetch('http://localhost:4000/topics', {
            method: 'POST',
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
            console.log('topic submit data', data);
            addTopicHandler(data);
        })
        .catch(err => console.log('topic submit error', err));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="topic-form">
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register('name', { required: true })} />
                {error?.name && <p className="text-danger">Name is required.</p>}
            </div>

            <button type="submit" className="topic-form-btn mb-1">Submit</button>
        </form>
    );
}

export default TopicForm;