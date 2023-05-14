import "./Input.scss";

const Input = ({ placeholder, className, type, autoFocus, name }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
            autoFocus={autoFocus}
            autoComplete="current-password"
            required
        />
    );
};

export default Input;
