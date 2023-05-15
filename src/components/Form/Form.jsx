import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input/Input";

import logo from "../../assets/images/logo/logo.svg";
import "./Form.scss";

const initialState = {
    name: "",
    surname: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
};

const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const isSignUp = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    };

    const switchMode = () => {
        dispatch({ type: "SWITCH" });
    };

    return (
        <section className="auth">
            <div className="container">
                <form className="auth__form" onSubmit={handleSubmit}>
                    <div className="auth__form-top">
                        <Link to="/">
                            <img src={logo} alt="TCB logo" />
                        </Link>
                        <h2 className="auth__form-title">TCB</h2>
                    </div>
                    {isSignUp && (
                        <div className="auth__user-info">
                            <Input
                                autoFocus={true}
                                name="name"
                                placeholder="Name"
                                type="text"
                                handleChange={handleChange}
                                className="form__input"
                            />
                            <Input
                                placeholder="Surname"
                                name="surname"
                                type="text"
                                handleChange={handleChange}
                                className="form__input"
                            />
                        </div>
                    )}
                    <Input
                        type="email"
                        name="email"
                        className="form__input"
                        placeholder="Email"
                        handleChange={handleChange}
                    />

                    {isSignUp && (
                        <div className="auth__user-info">
                            <Input
                                type="text"
                                name="phone_number"
                                className="form__input"
                                placeholder="Phone number"
                                handleChange={handleChange}
                            />
                            <Input
                                name="username"
                                type="text"
                                className="form__input"
                                handleChange={handleChange}
                                placeholder="User name"
                            />
                        </div>
                    )}
                    <Input
                        type="password"
                        name="password"
                        className="form__input"
                        placeholder="Password"
                        handleChange={handleChange}
                    />
                    <button className="auth__submit-btn" type="submit">
                        {isSignUp ? "Sign up" : "Sign in"}
                    </button>
                    <button className="auth__switch-btn" onClick={switchMode}>
                        {isSignUp
                            ? "Already have an account? Sign In"
                            : "Don't have an account? Sign Up"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;
