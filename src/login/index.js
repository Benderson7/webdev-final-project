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
        <div className={"wd-bg-white container pt-2 pb-1"}>
            <div className={"row text-center"}>
                <h3>Login</h3>
            </div>
            <div className={"input-group mb-3"}>
                <label className={"input-group-addon"} htmlFor={"username"}>
                    <i className={"form-control bi bi-person rounded-0"} htmlFor={"username"}></i>
                </label>
                <input
                    id={"username"}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                    value={username}/>
            </div>
            <div className={"input-group mb-3"}>
                <label className={"input-group-addon"} htmlFor={"password"}>
                    <i className={"form-control bi bi-lock rounded-0"}></i>
                </label>
                <input
                    id={"password"}
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    value={password}
                />
            </div>
            <button
                className="btn btn-primary w-100 mb-3 mt-3"
                onClick={handleLoginBtn}>
                Login
            </button>
            <div className={"text-center mt-3"}>
                Don't have an account?&nbsp;
                <Link to="/register">
                    <u>Click here to register</u>
                </Link>
            </div>
        </div>
    )
}

export default Login