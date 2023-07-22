import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function ProjectNavigation() {
    const { user, logout } = useContext(UserContext);

    function logoutHandler() {
        logout();
    }

    return (
        <header data-bs-theme="dark">
            <div className="collapse text-bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4>Socials</h4>
                            
                            <div className="portfolio-socials-wrapper">
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-github"></i></a>
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-linkedin"></i></a>
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-twitter"></i></a>
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-instagram"></i></a>
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-facebook"></i></a>
                                <a className="portfolio-social-link" target="_blank" href="www.example.com"><i className="bi bi-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-2 offset-md-1 py-4">
                            <h4>Explore</h4>
                            <ul className="list-unstyled">
                                <li className="portfolio-list-item">
                                    <Link className="portfolio-link" to="/">Home</Link>
                                </li>
                                <li className="portfolio-list-item">
                                    <Link className="portfolio-link" to="/about">About</Link>
                                </li>
                                <li className="portfolio-list-item">
                                    <Link className="portfolio-link" to="/contact">Contact</Link>
                                </li>
                                <li className="portfolio-list-item">
                                    <Link className="portfolio-link link-active" to="/projects">Projects</Link>
                                </li>
                                <li className="portfolio-list-item">
                                    <Link className="portfolio-link" to="/blogs">Blogs</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2 py-4">
                            <h4>Account</h4>
                            <ul className="list-unstyled">
                                {user ? (
                                    <>
                                        <li className="portfolio-list-item">
                                            <Link className="portfolio-link" to="/userpage">Userpage</Link>
                                        </li>
                                        <li className="portfolio-list-item">
                                            <Link className="portfolio-link" onClick={logoutHandler}>Logout</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="portfolio-list-item">
                                            <Link className="portfolio-link" to="/sign-in">Sign In</Link>
                                        </li>
                                        <li className="portfolio-list-item">
                                            <Link className="portfolio-link" to="/sign-up">Sign Up</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href={user ? '/userpage' : '/sign-in'} className="navbar-brand d-flex align-items-center">
                        <i className="bi bi-person-circle"></i> &nbsp;
                        <strong>{user ? user.username : 'Guest'}</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default ProjectNavigation;