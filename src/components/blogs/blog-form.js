import { useForm } from "react-hook-form";

function BlogForm() {
    const { register, handleSubmit, errors } = useForm();

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="blog-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', { required: true })} />
                {errors?.title && <span className="error">This field is required</span>}
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