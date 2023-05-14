import { SIGNIN, SIGNUP } from "../constants/actionsTypes";

const userReducer = (signUp = false, action) => {
    switch (action.type) {
        case SIGNUP:
            return (signUp = true);

        case SIGNIN:
            return (signUp = false);
        default:
            return signUp;
    }
};

export default userReducer;
