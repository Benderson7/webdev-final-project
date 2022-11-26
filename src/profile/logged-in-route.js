import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const LoggedInRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        return (<Navigate to={'/'}/>)
    } else {
        return (children)
    }
}

export default LoggedInRoute;
