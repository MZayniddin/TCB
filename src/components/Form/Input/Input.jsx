import "./Input.scss";

const Input = ({
    placeholder,
    className,
    type,
    autoFocus,
    name,
    handleChange,
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
            autoFocus={autoFocus}
            autoComplete="current-password"
            onChange={handleChange}
            required
        />
    );
};

export default Input;
