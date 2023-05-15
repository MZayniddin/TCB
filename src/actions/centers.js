import * as api from "../api";

import { FETCH_ALL, SEARCH } from "../constants/actionsTypes";

export const getCenters = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCenters();

        dispatch({ type: FETCH_ALL, payload: data.results });
    } catch (error) {
        console.log(error);
    }
};

export const searchCenter = (value) => async (dispatch) => {
    try {
        const { data } = await api.searchCenters(value);

        dispatch({ type: SEARCH, payload: data.results });
    } catch (error) {
        console.log(error);
    }
};
