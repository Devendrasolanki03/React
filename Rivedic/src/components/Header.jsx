import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import useDarkMode from "../services/useDarkMode";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const { items } = useCartStore();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#020617] shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-700 dark:text-amber-400">
              🏔️ Rivedic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/product/1" className="nav-link">
              Shilajit
            </Link>
            <Link to="/benefits" className="nav-link">
              Benefits
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full 
                         flex items-center justify-center
                         bg-gray-100 dark:bg-black/40
                         hover:scale-105 active:scale-95
                         transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Profile */}
            <Link
              to="/profile"
              className="text-gray-700 dark:text-gray-300 
                         hover:text-green-600 dark:hover:text-amber-400
                         transition"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 dark:text-gray-300 
                         hover:text-green-600 dark:hover:text-amber-400
                         transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-red-500 
                                 text-white text-xs rounded-full 
                                 w-5 h-5 flex items-center justify-center"
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/product/1" className="nav-link" onClick={closeMenu}>
              Shilajit
            </Link>
            <Link to="/benefits" className="nav-link" onClick={closeMenu}>
              Benefits
            </Link>
            <Link to="/about-us" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
