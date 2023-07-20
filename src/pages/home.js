import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../store/user-context";

function HomePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    
    return (
        <div className="homepage">
            <div className="homepage-header">
                <h1 className="homepage-title">Welcome {user && user.username}</h1>

                <p className="homepage-subtitle">
                    This is a practice portfolio project using React, React Router, and React Context. Building on skills learned from the <a href="https://www.youtube.com/watch?v=Law7wfdg_ls" target="_blank" rel="noreferrer">React Router tutorial</a> by <a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw" target="_blank" rel="noreferrer">Web Dev Simplified</a> and the <a href="https://www.youtube.com/watch?v=4UZrsTqkcW4" target="_blank" rel="noreferrer">React Context tutorial</a> by <a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw" target="_blank" rel="noreferrer">Web Dev Simplified</a>. I am using a ruby on rails server for the backend using a postgresql database. I provide links to my other projects and social media accounts. I also provide a contact form for anyone who wants to reach out to me. I am using the <a href="https://www.npmjs.com/package/react-hook-form" target="_blank" rel="noreferrer">React Hook Form</a> library for the contact form.
                </p>

                <div className="header-actions">
                    <button onClick={() => navigate('/')} className="header-action">projects</button>
                    <button onClick={() => navigate('/')} className="header-action">about</button>
                    <button onClick={() => navigate('/')} className="header-action">contact</button>
                    <button onClick={() => navigate('/')} className="header-action">blogs</button>
                    <button onClick={() => navigate('/')} className="header-action">portfolio</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;