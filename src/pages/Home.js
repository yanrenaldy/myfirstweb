import React from "react";
import "../styling/styles.css";
import Walls from "../components/Walls";
import KeyFeatures from "../components/KeyFeatures";
import NewsCard from "../components/NewsCard";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Walls />
      <KeyFeatures />
      <NewsCard />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
