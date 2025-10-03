import css from './Footer.module.css';
import Container from '../Container/Container';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={css["footerWrapper"]}>
            <Container>
                <div className={css["footerContainer"]}>
                    <div className={clsx(css["nav-recipes-logo"])}>
                        <Link to="/">
                            <img src="/images/logo.svg" alt="Logo" className={clsx(css["logo"])} />
                        </Link>
                    </div>
                    <p>© 2025 CookingCompanion. All rights reserved.</p>
                    <div className={clsx(css["nav-recipes"])}>
                        <Link to="/recipes">Recipes</Link>
                        <Link to="/">Account</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;