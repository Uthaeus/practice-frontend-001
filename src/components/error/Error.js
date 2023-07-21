import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error-page">
            <h1 className="error-title">404</h1>
            <p className="error-subtitle">Page not found</p>
            <Link to="/" end className="error-link">Go back to home page</Link>
        </div>
    );
}

export default ErrorPage;