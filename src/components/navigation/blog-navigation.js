import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function BlogNavigation() {
    const { user, logout } = useContext(UserContext);

    function logoutHandler() {
        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('practice-token')}` }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            localStorage.removeItem('practice-token');
            logout();
        })
        .catch(error => console.log('logout error', error));
    }

    return (
        <div className="blog-navigation">
            <div className="blog-navigation-head">
                <p>user here</p>
            </div>

            <div className="blog-navigation-links">
                <NavLink to="/" end className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>About</NavLink>
                <NavLink to="/contact" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Contact</NavLink>
                <NavLink to="/projects" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Projects</NavLink>
                <NavLink to="/blogs" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Blogs</NavLink>
            </div>

            <div className="blog-navigation-auth">
                {user ? (
                    <>
                        <NavLink to="/userpage" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>User</NavLink>
                        <p onClick={logoutHandler} className="blog-link">Logout</p>
                    </>
                ) : (
                    <>
                        <NavLink to="/sign-in" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Sign In</NavLink>
                        <NavLink to="/sign-up" className={({ isActive}) => isActive ? "blog-link link-active" : "blog-link"}>Sign Up</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogNavigation;