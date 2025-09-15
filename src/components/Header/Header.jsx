import css from './Header.module.css';

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