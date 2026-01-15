import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import OurStory from "./pages/OurStory";
import Benefits from "./pages/Benefits";
import LabReports from "./pages/LabReports";
import CustomerCare from "./pages/CustomerCare";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";

// ✅ ADMIN PAGES (FIXED PATHS)
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import Orders from "./admin/Orders";
import Reports from "./admin/Reports";

/* ===================== ROUTE CONTENT ===================== */
function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />

          {/* Info Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/lab-reports" element={<LabReports />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

/* ===================== ROOT ===================== */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
