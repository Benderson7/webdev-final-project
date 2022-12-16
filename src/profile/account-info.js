import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const AccountInfo = () => {
    const {currentUser} = useSelector((state) => state.users)

    const navigate = useNavigate()
    const handleEditBtn = () => {
        navigate('/edit-profile');
    }

    return(
        <div className={"container wd-bg-white mt-3"}>
            {currentUser.username !== undefined &&
                <form>
                    <h3>Account Info:</h3>
                    <div className={"row mb-3"}>
                        <label htmlFor={"usernameInput"}
                               className={"col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3 form-label"}>
                            Username:
                        </label>
                        <div className={"col-xxl-9 col-xl9 col-lg-9 col-md-9 col-8"}>
                            <input className={"form-control"}
                                   id={"usernameInput"}
                                   value={currentUser.username}
                                   readOnly
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"emailInput"}
                               className={"col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3 form-label"}>
                            Email:
                        </label>
                        <div className={"col-xxl-9 col-xl9 col-lg-9 col-md-9 col-8"}>
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
                        <label htmlFor={"firstnameInput"}
                               className={"col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3 form-label"}>
                            First name:
                        </label>
                        <div className={"col-xxl-9 col-xl9 col-lg-9 col-md-9 col-8"}>
                            <input className={"form-control"}
                                   id={"firstnameInput"}
                                   placeholder={"First Name"}
                                   value={currentUser.firstName}
                                   readOnly
                            />
                        </div>
                    </div>
                    <div className={"row mb-3"}>
                        <label htmlFor={"lastnameInput"}
                               className={"col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-3 form-label"}>
                            Last Name:
                        </label>
                        <div className={"col-xxl-9 col-xl9 col-lg-9 col-md-9 col-8"}>
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