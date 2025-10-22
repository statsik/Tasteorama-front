import css from './SureModPage.module.css';

const SureModPage = () => {
    return(
    <div className={css["sure-mode-wrapper"]}>
        <p className={css["sure-mode-title"]}>Are you shure?</p>
        <p className={css["sure-mode-description"]}>We will miss you!</p>
        <div className={css["sure-mode-button-wrapper"]}>
            <button className={css["sure-mode-button-login"]}>Log out</button>
            <button className={css["sure-mode-button-register"]}>Cancel</button>
        </div>
    </div>)
}

export default SureModPage;