import * as api from "../api";

import { GET_ALL_COURSES } from "../constants/actionsTypes";

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses();

        dispatch({ type: GET_ALL_COURSES, payload: data.data });
    } catch (error) {
        console.log(error);
    }
};