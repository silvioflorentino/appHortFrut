import axios from "axios";

const Api = axios.create({
    baseURL: "http://10.133.47.15:3000"
});

export default Api