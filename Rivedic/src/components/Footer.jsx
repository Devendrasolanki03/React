import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🏔️ Rivedic</h3>
            <p className="text-gray-400 text-sm">
              Premium Himalayan Shilajit sourced from the purest mountains.
              Experience nature's most powerful wellness supplement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="hover:text-white transition">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/lab-reports" className="hover:text-white transition">
                  Lab Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-bold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:text-white transition"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="hover:text-white transition"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@rivedic.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Rivedic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
