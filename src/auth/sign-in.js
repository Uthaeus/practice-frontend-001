import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../store/user-context";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);
        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/sign_in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('practice-token', token);
                return response.json();
            } 
        })
        .then(data => {
            console.log('sign in data', data.data);
            userCtx.login(data.data);
            navigate('/');
        })
        .catch(error => console.log('sign in error', error));
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