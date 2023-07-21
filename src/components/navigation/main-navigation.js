import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
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
        <div className="main-navigation">

            <div className="main-navigation__user">
                {user ? <Link to="/userpage" className="nav-user-link">{user.username}</Link> : <Link to="/sign-in" className="nav-user-link">Hi Anonymous</Link>}
            </div>

            <div className="main-navigation__items">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Projects</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Blogs</NavLink>
                { user && <NavLink to="/userpage" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>User</NavLink>}
            </div>

            <div className="main-navigation__auth">
                {user ? (
                    <p onClick={logoutHandler} className="nav-link">Logout</p>
                ) : (
                    <>
                        <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                        <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default MainNavigation;