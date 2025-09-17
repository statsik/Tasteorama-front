import css from './Header.module.css';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
    <header className={css["headerWrapper"]}>
        <Container>
            <Navigation />
        </Container>
    </header>
    )
}

export default Header;