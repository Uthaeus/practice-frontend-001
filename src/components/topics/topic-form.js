import { useForm } from "react-hook-form";

function TopicForm() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="topic-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register('name', { required: true })} />
                {error?.name && <p className="text-danger">Name is required.</p>}
            </div>

            <button type="submit" className="topic-form-btn">Submit</button>
        </form>
    );
}

export default TopicForm;