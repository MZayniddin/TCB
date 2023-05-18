import { GET_ALL_COURSES } from "../constants/actionsTypes";

const centersReducer = (courses = [], action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            console.log(action.payload)
            return action.payload;

        default:
            return courses;
    }
};

export default centersReducer;
