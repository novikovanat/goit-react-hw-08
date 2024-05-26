import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { fetchUserData } from "../../redux/auth/authOps";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const RestrictedRoute = lazy(() => import("../RestrictedRoute/RestrictedRoute"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));


import Layout from "../Layout/Layout";
// import HomePage from "../../pages/HomePage/HomePage";
// import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
// import LoginPage from "../../pages/LoginPage/LoginPage";
// import ContactsPage from "../../pages/ContactsPage/ContactsPage";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData(), [dispatch]);
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo={"/"}
            ></RestrictedRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo={"/contacts"}
            />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
