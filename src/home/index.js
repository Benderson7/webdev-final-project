import {useSelector} from "react-redux";

function Home() {

    const {currentUser} = useSelector((state) => state.users)
    return (
        <>
            {
                currentUser &&
                <h1>Hello {currentUser.username} :^)</h1>
            }
        </>
    );
}

export default Home;