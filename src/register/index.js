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
        <div className={"container wd-bg-white"}>
            <h3 className={"text-center"}>Register</h3>
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
                <input type={"password"}
                       onChange={(e) => setPassword(e.target.value)}
                       className="form-control"
                       placeholder="password"
                       value={password}/>
            </div>
            <input type={"checkbox"} className={"mb-3"}
                   onClick={(e) => {e.target.checked? setRole("ADMIN"): setRole("USER")}}
            /> Admin Account?
            <button
                className="btn btn-primary w-100 mb-3"
                onClick={handleRegisterBtn}>
                Register Now
            </button>
            <div className={"text-center"}>
                Already have an account?
                <Link to="/login"> Login</Link>
            </div>
        </div>
    )
}

export default Register