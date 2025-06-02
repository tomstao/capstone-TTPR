import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import NewArrivals from "./components/NewArrivals";
import Exclusive from "./components/Exclusive";
import BestSellers from "./components/BestSellers";
import Series from "./components/Series";
import PlasticModels from "./components/PlasticModels";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#2196F3",
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      marginBottom: "1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <CategoryNav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/plastic-models" element={<PlasticModels />} />
              <Route path="/exclusive" element={<Exclusive />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/series" element={<Series />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
