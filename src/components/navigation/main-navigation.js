import { NavLink } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('Logout');
    }

    return (
        <div className="main-navigation">
            <div className="main-navigation__logo">
                <h1>React App</h1>
            </div>

            <div className="main-navigation__items">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} exact>Home</NavLink>
                <NavLink to="/userpage" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Userpage</NavLink>
            </div>

            <div className="main-navigation__auth">
                <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
                <p onClick={logoutHandler} className="nav-link">Logout</p>
            </div>
        </div>
    );
}

export default MainNavigation;