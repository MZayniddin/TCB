import * as api from "../api";

import { FETCH_ALL } from "../constants/actionsTypes";

export const getCenters = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCenters();
        console.log(data.results)
        dispatch({ type: FETCH_ALL, payload: data.results });
    } catch (error) {
        console.log(error);
    }
};
