import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { HeaderBanner1 } from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
    return (
        <>
            <Layout>
                <Header />
                <HeaderBanner1 />
                
            </Layout>
            <Footer />
        </>
    );
};

export default HomePage;