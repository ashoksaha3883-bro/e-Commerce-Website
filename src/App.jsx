// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { useState } from "react";
import Navbar from './components/Navbar';
import LoginForm from './components/LoginFrom'; // ensure correct path
import Secondnav from './components/Secondnav';
import HomePage from './components/HomePage';
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Brand from "./components/Brand";
import CartPage from "./Pages/CartPage";
import ProductDetail from "./Pages/ProductDetails"; // ✅ import the component
import TopDeal from "./components/TopDeal";
import InBudget from "./components/InBudget";
import SummerCollections from "./components/SummerCollection";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <CartProvider>  
      <BrowserRouter>
        <Navbar 
          isLoggedIn={isLoggedIn} 
          userEmail={userEmail} 
          onLogout={handleLogout} 
        />
        <Secondnav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/login" 
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            } 
          />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/top-deal" element={<TopDeal />} />
          <Route path="/summer" element={<SummerCollections />} />
<Route path="/budget" element={<InBudget />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;