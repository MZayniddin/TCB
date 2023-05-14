import { SIGNIN, SIGNUP, SWITCH } from "../constants/actionsTypes";

const userReducer = (signUp = false, action) => {
    switch (action.type) {
        case SIGNUP:
            return (signUp = true);

        case SIGNIN:
            return (signUp = false);

        case SWITCH:
            return !signUp;
        
            default:
            return signUp;
    }
};

export default userReducer;
