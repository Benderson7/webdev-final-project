import {Link, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function Layout({active = 'home'}) {

    const location = useLocation();
    const {pathname} = location;
    const parts = pathname.split('/')
    const pathLength = parts.length
    let currentNav = parts[pathLength - 1]
    if (currentNav === "") {
        currentNav = "home"
    }

    const {currentUser} = useSelector((state) => state.users)
    return (
        <div className="mb-4">
            <div className="list-group list-group-horizontal">
                <div className={`list-group-item ${currentNav === 'home'?'active':''}`}>
                    <Link to="/">Home</Link>
                </div>
                <div className={`list-group-item ${currentNav === 'search'?'active':''}`}>
                    <Link to="/search">Search</Link>
                </div>
                <div className={`list-group-item ${(parts.includes("login") || parts.includes("register") || 
                parts.includes("profile")) ?'active':''}`}>
                    <Link to={`/${currentUser ? "profile" : "login"}`}>{`${currentUser ? "Profile" : "Login/Register"}`}</Link>
                </div>
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;