
import MainNavigation from "../navigation/main-navigation";

function HomePage() {
    return (
        <div className="homepage">
            <MainNavigation />
            
            <div className="body">
                <div className="header">
                    <p>ebay</p>

                    <div className="category-menu-dropdown">
                        <p>Shop by category</p>
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Search for anything" />

                        <div className="search-bar-dropdown">
                            <p>All Categories</p>
                        </div>
                    </div>

                    <button>Search</button>

                    <p>Advanced</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;