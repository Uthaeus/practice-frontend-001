import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../store/user-context";

function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);
        let dataToSend = {
            user: {
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
                username: data.username || ''
            }
        };

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get(['Authorization'].split(' ')[1]);
                console.log('sign up token', token);
                return response.json();
            } 
        })
        .then(data => {
            console.log('sign up data', data.data);
            userCtx.login(data.data);
            navigate('/');
        })
        .catch(error => console.log('sign up error', error));
    }

    return (
        <div className='auth-container'>
            <h1 className="auth-title">Sign Up</h1>

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

                <div className="form-group mb-3">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type='password' className="form-control" {...register("password_confirmation", { required: true })} />
                    {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="auth-btn mb-2">Sign Up</button>
            </form>

            <Link to="/sign-in" className="auth-link">Already have an account? Sign In</Link>
        </div>
    );
}

export default SignUp;