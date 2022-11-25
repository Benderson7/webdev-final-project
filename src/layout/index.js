import './index.css';
import {Link, Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

function Layout() {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(profileThunk())}, [])
    return (
        <div>
            <div className="list-group list-group-horizontal">
                <div className="list-group-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/login">Login</Link>
                </div>
                <div className="list-group-item">
                    <Link to="/register">Register</Link>
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