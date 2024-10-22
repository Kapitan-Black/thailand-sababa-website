import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import ContactFormPage from "./pages/ContactFormPage";
import FormSubmitedPage from "./pages/FormSubmitedPage";
import ContactFormLayout from "./layouts/ContactFormLayout";



const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/contact-form"
        element={
          <ContactFormLayout>
            <ContactFormPage />
          </ContactFormLayout>
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
