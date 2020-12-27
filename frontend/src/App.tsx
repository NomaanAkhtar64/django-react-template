import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer, { SocialLink } from "./Components/Footer";
import Header from "./Components/Header";
import "./Style/App.scss";

const socialLinks: SocialLink[] = [];

function App() {
  return (
    <BrowserRouter>
      <Header siteName="Starter TEmplate" />

      <Footer creditURL="#" socials={socialLinks} />
    </BrowserRouter>
  );
}

export default App;
