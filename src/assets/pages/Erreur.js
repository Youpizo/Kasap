import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error from "../components/Erreur/Erreur";
import Layout from "../components/Layout/Layout";


function ErrorPage() {
    return (
        <>
            <Layout>
                <Header />
                <Error />
            </Layout>
            <Footer />
        </>
    );
}

export default ErrorPage;