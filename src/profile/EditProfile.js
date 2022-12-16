import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateUserThunk} from "../services/users-thunks";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [updateUser, setUpdateUser] = useState({})
    useEffect(() => setUpdateUser(currentUser), [currentUser])

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const handleUpdateBtn = () => {
        dispatch(updateUserThunk(updateUser))
        setUpdateUser({...updateUser, password: ''})
        navigation("/profile")
    }
    const handleBackBtn = () => {
        navigation("/profile")
    }

    return(
        <div className={"wd-bg-white container pb-3"}>
            {updateUser.username !== undefined &&
            <form>
                <h3 className={"mb-3"}>Edit Your Personal Information:</h3>
                <div className={"container"}>
                    <div className={"row mb-3"}>
                        <label htmlFor={"usernameInput"} className={"col-3 col-form-label"}>Username:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"usernameInput"}
                                   onChange={(e) => setUpdateUser({...updateUser, username: e.target.value})}
                                   placeholder={"username"}
                                   value={updateUser.username}
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"passwordInput"} className={"col-3 col-form-label"}>Password:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                id={"passwordInput"}
                                onChange={(e) => setUpdateUser({...updateUser, password: e.target.value})}
                                type={"password"}
                                placeholder={"password"}
                                value={updateUser.password}
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"emailInput"} className={"col-3 col-form-label"}>Email:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"emailInput"}
                                   onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})}
                                   type={"email"}
                                   placeholder={"email"}
                                   value={updateUser.email}
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"firstnameInput"} className={"col-3 col-form-label"}>First name:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"firstnameInput"}
                                   onChange={(e) => setUpdateUser({...updateUser, firstName: e.target.value})}
                                   placeholder={"First Name"}
                                   value={updateUser.firstName}
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"lastnameInput"} className={"col-3 col-form-label"}>Last Name:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"lastnameInput"}
                                   onChange={(e) => setUpdateUser({...updateUser, lastName: e.target.value})}
                                   placeholder={"Last Name"}
                                   value={updateUser.lastName}
                            />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            <button onClick={handleBackBtn} type={"button"} className={"btn btn-danger"}>
                                Go Back to Profile
                            </button>
                        </div>
                        <div className={"col-4 float-end"}>
                            <button onClick={handleUpdateBtn} type={"button"} className={"btn btn-primary float-end"}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            }
        </div>
    )
}

export default EditProfile;