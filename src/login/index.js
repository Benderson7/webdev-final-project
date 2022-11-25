import {useState} from "react";
import {loginThunk} from "../services/users-thunks";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
        } catch (e) {
            // Do something here to display in error in the browser
        }
    }

    if (currentUser) {
        return (<Navigate to={'/'}/>)
    }

    return(
        <>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}
            />
            <input
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                value={password}
            />
            <button onClick={handleLoginBtn}>Login</button>
            <Link to="/register">
                Don't have an account? Click here to register.
            </Link>
        </>
    )
}

export default Login