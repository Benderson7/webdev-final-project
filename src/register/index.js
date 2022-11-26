import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "../services/users-thunks";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('USER')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, role}))
    }

    return(
        <>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <input type={"password"}
                   onChange={(e) => setPassword(e.target.value)}
                   className="form-control"
                   placeholder="password"
                   value={password}/>
            <input
                type={"checkbox"}
                onClick={(e) => {e.target.checked? setRole("ADMIN"): setRole("USER")}}
            /> Admin Account?
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            <Link to="/login">
                Already have an account? Click here to login.
            </Link>
        </>
    )
}

export default Register