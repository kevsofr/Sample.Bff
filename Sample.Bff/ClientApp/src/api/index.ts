import axios from "axios";

export default axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_URL}`,
    headers: {
        "X-CSRF": "1"
    }
});