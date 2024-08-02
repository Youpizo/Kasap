import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../src/assets/pages/Erreur";
import HomePage from "./assets/pages/HomePage";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Layout from "./assets/components/Layout/Layout";
import AboutPage from "./assets/pages/About";
import Logements from "./assets/pages/Logements";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/logements/:id" element={<Logements />} />
          </Routes>
        </main>
      </Layout>
      <Footer />
    </Router>
  </React.StrictMode>
);