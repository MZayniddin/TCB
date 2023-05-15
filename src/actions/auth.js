import * as api from "../api";

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData);
        const { data } = await api.signup({
            ...formData,
            message_language: "uz",
        });

        console.log(data);
        // navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        console.log({
            ...formData,
            otp: formData.password,
        });
        const { data } = await api.signin({
            ...formData,
            otp: formData.password,
        });

        console.log(data);
        // navigate("/");
    } catch (error) {
        console.log(error);
    }
};
