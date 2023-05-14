import { useSelector } from "react-redux";
import Input from "./Input/Input";

import logo from "../../assets/images/logo/logo.svg";
import "./Form.scss";

const Form = () => {
    const signUp = useSelector((state) => state.user);
    return (
        <section className="auth">
            <div className="container">
                <form className="auth__form">
                    <div className="auth__form-top">
                        <img src={logo} alt="TCB logo" />
                        <h2 className="auth__form-title">TCB</h2>
                    </div>
                    {signUp && (
                        <div className="auth__user-info">
                            <Input
                                autoFocus={true}
                                placeholder="Name"
                                type="text"
                                className="form__input"
                            />
                            <Input
                                placeholder="Surname"
                                type="text"
                                className="form__input"
                            />
                        </div>
                    )}
                    <Input
                        type="text"
                        className="form__input"
                        placeholder="User name"
                    />
                    {signUp && (
                        <>
                            <Input
                                type="text"
                                name="phone_number"
                                className="form__input"
                                placeholder="Phone number"
                            />
                            <Input
                                type="email"
                                name="email"
                                className="form__input"
                                placeholder="Email"
                            />
                        </>
                    )}
                    <Input
                        type="password"
                        className="form__input"
                        placeholder="Password"
                    />
                    <button className="auth__submit-btn" type="submit">
                        {signUp ? "Sign up" : "Sign in"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;
