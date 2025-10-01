import css from './CreateRecepiesPage.module.css';
import CreateRecepiesForm from '../../components/CreateRecepiesForm/CreateRecepiesForm';

const CreateRecepiesPage = () => {
    return (
        <div className={css["create-page-wrapper"]}>
            <CreateRecepiesForm />
        </div>
    )
}

export default CreateRecepiesPage;