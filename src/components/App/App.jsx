import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { fetchUserData } from "../../redux/auth/authOps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData(), [dispatch]);
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
