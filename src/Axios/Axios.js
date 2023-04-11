import axios from "axios";
import { Base_url } from "../Constance/Constance";

const instance = axios.create({
    baseURL: Base_url
});

export default instance;