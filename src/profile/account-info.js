import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const AccountInfo = () => {
    const {currentUser} = useSelector((state) => state.users)

    const navigate = useNavigate()
    const handleEditBtn = () => {
        navigate('/edit-profile');
    }

    return(
        <div className={"container wd-bg-white mt-3 mb-3"}>
            {currentUser.username !== undefined &&
                <form>
                    <h3>Account Info:</h3>
                    <div className={"row mb-3"}>
                        <label htmlFor={"usernameInput"} className={"col-2 col-form-label"}>Username:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"usernameInput"}
                                   value={currentUser.username}
                                   readOnly
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"emailInput"} className={"col-2 col-form-label"}>Email:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"emailInput"}
                                   type={"email"}
                                   placeholder={"email"}
                                   value={currentUser.email}
                                   readOnly
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"firstnameInput"} className={"col-2 col-form-label"}>Firstname:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"firstnameInput"}
                                   placeholder={"First Name"}
                                   value={currentUser.firstName}
                                   readOnly
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"lastnameInput"} className={"col-2 col-form-label"}>Last Name:</label>
                        <div className={"col-9"}>
                            <input className={"form-control"}
                                   id={"lastnameInput"}
                                   placeholder={"Last Name"}
                                   value={currentUser.lastName}
                                   readOnly
                            />
                        </div>
                    </div>
                    <button onClick={handleEditBtn} className={"btn btn-primary mb-3"}>
                        Edit Profile
                    </button>
                </form>
            }
        </div>
    )
}

export default AccountInfo;