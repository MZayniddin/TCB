import axios from "axios";

const API = axios.create({
    baseURL: "https://tcbapi-production.up.railway.app",
});

export const fetchCenters = () => API.get("/apps/center/list/");
