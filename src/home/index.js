import {useSelector} from "react-redux";
import AllUsers from "./all-users";

function Home() {

    const {currentUser} = useSelector((state) => state.users)

    if (currentUser.role === 'ADMIN') {
        return (
            <>
                <h2>USERS</h2>
                <AllUsers/>
            </>
        );
    }
    else {
        return (<>Regular User</>);
    }
}

export default Home;