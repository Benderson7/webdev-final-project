import './index.css';
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function Layout() {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <div>
            <div className="list-group list-group-horizontal">
                <div className="list-group-item">
                    <Link to="/">Home</Link>
                </div>
                <div className={`list-group-item ${currentUser ? 'd-none' : ''}`}>
                    <Link to="/login">Login</Link>
                </div>
                <div className={`list-group-item ${currentUser ? 'd-none' : ''}`}>
                    <Link to="/register">Register</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/pokemon">Search</Link>
                </div>
                <div className={`list-group-item ${currentUser ? '' : 'd-none'}`}>
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