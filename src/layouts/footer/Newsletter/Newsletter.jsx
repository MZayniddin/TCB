import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <strong className="footer__box-title">Join Our Newsletter</strong>
            <form className="newsletter__wrap">
                <input type="email" className="newsletter__input" />
                <button className="newsletter-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
