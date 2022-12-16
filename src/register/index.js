import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "../services/users-thunks";
import "./index.css"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('USER')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, role}))
    }

    return(
        <div className={"container wd-bg-white pt-1 pb-1"}>
            <h3 className={"text-center pb-1 pb-1"}>Register</h3>
            <div className={"input-group mb-3"}>
                <label className={"input-group-addon"} htmlFor={"username"}>
                    <i className={"form-control bi bi-person rounded-0"}></i>
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
                <input type={"password"}
                       id={"password"}
                       onChange={(e) => setPassword(e.target.value)}
                       className="form-control"
                       placeholder="password"
                       value={password}/>
            </div>
            <div className={"pb-1 position-relative"}>
                <input type={"checkbox"} className={"mb-3 me-1"} id={"role"}
                       onClick={(e) => {e.target.checked? setRole("ADMIN"): setRole("USER")}}
                />
                <label className={"wd-text-small wd-shift-up position-absolute"} htmlFor={"role"}>
                    Admin Account?
                </label>
            </div>
            <button
                className="btn btn-primary w-100 mb-3"
                onClick={handleRegisterBtn}>
                Register Now
            </button>
            <div className={"text-center mt-3"}>
                Already have an account?&nbsp;
                <Link to="/login">
                    <u>
                        Login
                    </u>
                </Link>
            </div>
        </div>
    )
}

export default Register