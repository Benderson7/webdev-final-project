import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "../services/users-thunks";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(profileThunk())}, [])

    return (children)
}

export default CurrentUser;