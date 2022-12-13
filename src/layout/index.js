import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function Layout() {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <div className="mb-4">
            <div className="list-group list-group-horizontal">
                <div className="list-group-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/pokemon">Search</Link>
                </div>
                <div className="list-group-item">
                    <Link to={`/${currentUser ? "profile" : "login"}`}>{`${currentUser ? "Profile" : "Log In / Register"}`}</Link>
                </div>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;