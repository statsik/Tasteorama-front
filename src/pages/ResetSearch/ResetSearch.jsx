import css from './ResetSearch.module.css';

const ResetSearch = () => {
    return (
        <div className={css["reset-search-wrapper"]}>
            <p className={css["reset-search-title"]}>We’re sorry! We were not able to find a match.</p>
            <button className={css["reset-search-button"]}>Reset serach and filters</button>
        </div>
    );
}
export default ResetSearch;