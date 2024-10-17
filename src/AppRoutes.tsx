import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import ContactFormPage from "./pages/ContactFormPage";
import FormSubmitedPage from "./pages/FormSubmitedPage";



const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/contact-form"
        element={
          <Layout>
            <ContactFormPage />
          </Layout>
        }
      />
      <Route
        path="/form-submitted"
        element={
          <Layout>
            <FormSubmitedPage/>
          </Layout>
        }
      />

      <Route path="/user-profile" element={<span>User Profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
