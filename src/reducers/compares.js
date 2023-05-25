import { ADD } from "../constants/actionsTypes";

const compareCourses = (compares = [], action) => {
    switch (action.type) {
        case ADD:
            return [...compares, action.payload];

        default:
            return compares;
    }
};

export default compareCourses
