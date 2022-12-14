import {useState} from "react";
import {loginThunk} from "../services/users-thunks";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Login = () => {
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

    return(
        <div>
            <div className={"row"}>
                <h3>Welcome, please login!</h3>
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-addon"}>
                    <i className={"form-control bi bi-person rounded-0"}></i>
                </span>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                    value={username}/>
            </div>
            <div className={"input-group mb-3"}>
                <span className={"input-group-addon"}>
                    <i className={"form-control bi bi-lock rounded-0"}></i>
                </span>
                <input
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    value={password}
                />
            </div>
            <div className={"row mb-3"}>
                <button className="btn btn-success btn-block rounded-pill"
                        onClick={handleLoginBtn}>Login</button>
            </div>
            <div className={"row"}>
                <Link to="/register" className="btn btn-primary btn-block rounded-pill">
                    Don't have an account? Click here to register.
                </Link>
            </div>
        </div>
    )
}

export default Login