import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
