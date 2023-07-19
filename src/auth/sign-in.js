import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign In</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label> 
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="auth-btn mb-2">Sign In</button>
            </form>

            <Link to="/sign-up" className="auth-link">Don't have an account? Sign Up</Link>
        </div>
    );
}

export default SignIn;