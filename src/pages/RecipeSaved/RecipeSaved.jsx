import css from './RecipeSaved.module.css'

const RecipeSaved = () => {
    return (
        <div className={css["recipe-saved-wrapper"]}>
            <p className={css["recipe-saved-title"]}>Done! Recipe saved</p>
            <p className={css["recipe-saved-desc"]}>You can find recipe in our profile</p>
            <button className={css["recipe-saved-button"]}>Go to My profile</button>
        </div>
    )
};

export default RecipeSaved;