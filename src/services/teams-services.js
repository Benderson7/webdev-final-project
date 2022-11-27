import axios from "axios";

const BASE_API_URL = 'http://localhost:4000'

/* Not sure if this is needed
const api = axios.create({
    withCredentials: true
});
 */
export const getTeamByUserID = async (uid) => {
    const response = await axios.get(`${BASE_API_URL}/teams/${uid}`)
    const team = response.data
    return team
}