import Layout from './components/Layout/Layout';
import { selectIsRefreshing } from './redux/auth/selectors';
import { selectIsLoading } from './redux/loading/selector.js';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import RestrictedRoute from "./components/Routes/RestrictedRoute.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute.jsx";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
  const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
  const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
  const RecepiesPage = lazy(() => import('./pages/RecepiesPage/RecepiesPage'));
  const OneRecipePage = lazy(() => import('./pages/OneRecipePage/OneRecipePage.jsx'));
  const MyProfile = lazy(() => import('./pages/MyProfile/MyProfile.jsx'));
  const SavedRecepiesPage = lazy(() => import('./pages/SavedRecepiesPage/SavedRecepiesPage.jsx'));
  const MyRecepiesPage = lazy(() => import('./pages/MyRecepiesPage/MyRecepiesPage.jsx'));
  const CreateRecepiesPage = lazy(() => import('./pages/CreateRecepiesPage/CreateRecepiesPage.jsx'));
  const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'))
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      {isLoading && <Loader />}
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/" />
              }
            />

            <Route path="recepies" element={<RecepiesPage />} />
            <Route path="recepies/:recepiesId" element={<OneRecipePage />} />

            <Route
              path="profile"
              element={
                <PrivateRoute component={<MyProfile />} redirectTo="/login" />
              }
            >
              <Route index element={<Navigate to="my-recepies" replace />} />
              <Route path="my-recepies" element={<MyRecepiesPage />} />
              <Route path="saved" element={<SavedRecepiesPage />} />
            </Route>

            {/* <Route
              path="create"
              element={
                <PrivateRoute
                  component={<CreateRecepiesPage />}
                  redirectTo="/login"
                />
              }
            /> */}

            <Route
              path="create"
              element={<CreateRecepiesPage />}
            />

            <Route
              path="create/:recepieId"
              element={
                <PrivateRoute
                  component={<CreateRecepiesPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App
