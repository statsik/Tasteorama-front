import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

const Layout = () => {
    return (
    <div className={css["layout-wrapper"]}>
        <Header />
        <main>
            <Container>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            </Container>
        </main>
        <Footer />
    </div>
    )
}

export default Layout;