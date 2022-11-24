import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password}))
    }


    if(currentUser) {
        return (<Navigate to={'/'}/>)
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