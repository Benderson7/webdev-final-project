import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const LoggedOutRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}

export default LoggedOutRoute;
