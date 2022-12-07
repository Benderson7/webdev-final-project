import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrentUserThunk} from "../services/users-thunks";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => {dispatch(getCurrentUserThunk())}, [])

    return (children)
}

export default CurrentUser;