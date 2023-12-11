import React, { useState } from "react";
import Results from "./pages/Results";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Home/Footer";
import Dashboard from "./components/ClientDashboard/Dashboard";
import SignIn from "./components/NavBar/Authentication/SignIn";
import Success from "./pages/Success";
import Details from "./pages/Details";
import Cart from "./components/cart/Cart";
import AdminHome from "./pages/AdminHome";
import AdminProducts from "./pages/AdminProducts";
import AdminAddProduct from "./pages/AdminAddProduct";
import AdminColorsCollections from "./pages/AdminColorsCollections";
import EditProduct from "./pages/AdminEditProduct";
import AdminOrders from "./pages/AdminOrders";
import AdminOrderInfo from "./pages/AdminOrderInfo";
import AdminUsers from "./pages/AdminUsers";
import HomeMain from "./pages/HomeMain";
import Collection from "./pages/Collection";
import MobileMenu from "./components/NavBar/MobileMenu";
import PageNotFound from "./components/404/PageNotFound";
import Faq from "./components/Home/Faq";
import AdminCodes from "./pages/AdminCodes";
import AdminEmails from "./pages/AdminEmails";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [adminDisplay, setAdminDisplay] = useState(false);

  return (
    <div className="font-roboto">
      <NavBar
        setShowLogin={setShowLogin}
        setShowCart={setShowCart}
        showCart={showCart}
        setShowMenu={setShowMenu}
        adminDisplay={adminDisplay}
      />
      <Routes>
        <Route path="/" element={<HomeMain setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin" element={<AdminHome setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin/users" element={<AdminUsers setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin/users" element={<AdminUsers setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin/products" element={<AdminProducts setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin/addproduct" element={<AdminAddProduct setAdminDisplay={setAdminDisplay}/>} />
        <Route
          path="/admin/colorscollections"
          element={<AdminColorsCollections setAdminDisplay={setAdminDisplay}/>}
        />
        <Route path="/admin/products/edit/:id" element={<EditProduct setAdminDisplay={setAdminDisplay}/>} />

        <Route path="/admin/orders" element={<AdminOrders setAdminDisplay={setAdminDisplay}/>} />

        <Route path="/admin/orders/:id" element={<AdminOrderInfo setAdminDisplay={setAdminDisplay}/>} />
        <Route path="/admin/codes" element={<AdminCodes setAdminDisplay={setAdminDisplay} />} />
        <Route path="/admin/emails" element={<AdminEmails setAdminDisplay={setAdminDisplay} />} />

        <Route path="/faqs" element={<Faq />} />

        <Route path="/profile" element={<Dashboard />} />

        <Route path="/results" element={<Results />} />

        <Route path="/collection/:collection" element={<Collection />} />

        <Route path="/success" element={<Success />} />

        <Route path="/product/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound setAdminDisplay={setAdminDisplay}/>} />

      </Routes>
      <Cart visible={showCart} setShowCart={setShowCart} />
      <MobileMenu
        visible={showMenu}
        setShowLogin={setShowLogin}
        setShowMenu={setShowMenu}
      />
      <SignIn visible={showLogin} setShowLogin={setShowLogin} />
      <Footer adminDisplay={adminDisplay}/>
    </div>
  );
};
export default App;
