import css from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
const RegistrationPage = () => {
    return (
        <div className={css["registration-page-wrapper"]}>
            <RegistrationForm />
        </div>
    )
}

export default RegistrationPage;