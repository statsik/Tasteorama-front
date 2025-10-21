import css from './ErrorSavingPage.module.css';

const ErrorSavingPage = () => {
    return (
        <div className={css["error-saving-wrapper"]}>
            <p className={css["error-saving-title"]}>Error while saving</p>
            <p className={css["error-saving-description"]}>To save this recipe, you need to authorize first</p>
            <div className={css["error-saving-button-wrapper"]}>
                <button className={css["error-saving-button-login"]}>Log in</button>
                <button className={css["error-saving-button-register"]}>Register</button>
            </div>
        </div>
    )
}

export default ErrorSavingPage;