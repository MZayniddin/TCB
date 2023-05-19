import * as api from "../api";

import { GET_ALL_COURSES } from "../constants/actionsTypes";

export const getCourses = (price, coursesType) => async (dispatch) => {
    try {
        console.log(coursesType)
        const { data } = await api.fetchCourses(price, coursesType);
        console.log(data.results)

        dispatch({ type: GET_ALL_COURSES, payload: data.results });
    } catch (error) {
        console.log(error);
    }
};
