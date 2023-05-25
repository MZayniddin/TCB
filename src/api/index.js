import axios from "axios";

const API = axios.create({
    baseURL: "https://tcbapi-production.up.railway.app/apps",
});

export const fetchCenters = () => API.get("/center/list/");
export const searchCenters = (value) =>
    API.get(`/center/list/?search=${value}`);

export const signup = (formData) => API.post("/user/signup/", formData);
export const signin = (formData) => API.post("/user/signin/", formData);

export const fetchCourses = (price, courseType) =>
    API.get(
        `/courses/list/range/filter/?category__name=${courseType}&name=&price_min=&price_max=${price[1]}`
        // `/center/list_courses/?courses__price_min=${price[0]}&courses__price_max=${price[1]}`
    );
