import css from './NotFoundMatcPage.module.css';

const NotFoundMatcPage = () => {
    return (
        <div className={css["not-match-wrapper"]}>
            <p className={css["not-match-title"]}>We’re sorry! We were not able to find a match.</p>
            <button className={css["not-match-reset-button"]}>Reset serach and filters</button>
        </div>
    )
}

export default NotFoundMatcPage;