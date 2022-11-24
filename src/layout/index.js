import './index.css';
import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <div className="list-group list-group-horizontal">
                <div className="list-group-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/pokemon">Search</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;