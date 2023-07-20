import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
    const { user, logout } = useContext(UserContext);

    function logoutHandler() {
        console.log('Logout');
    }

    return (
        <div className="main-navigation">

            <div className="main-navigation__user">
                {user ? <Link to="/userpage" className="nav-user-link">{user.username}</Link> : <Link to="/sign-in" className="nav-user-link">Hi Anonymous</Link>}
            </div>

            <div className="main-navigation__items">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} exact>Home</NavLink>
                <NavLink to="/userpage" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Userpage</NavLink>
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