import { FETCH_ALL } from "../constants/actionsTypes";

const centersReducer = (centers = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        default:
            return centers;
    }
};

export default centersReducer;
