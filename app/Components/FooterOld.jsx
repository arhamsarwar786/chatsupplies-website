"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 font-sans">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8 md:gap-5 md:text-left text-left">
          {/* Brand */}
          <div className="max-w-[350px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 w-8 h-8 rounded-md flex items-center justify-center">
                <FontAwesomeIcon icon={faComments} size="lg" style={{ color: "white" }} />
              </div>
              <span className="text-white text-[1.3rem] font-bold">ChatSupplies</span>
            </div>
            <p className="text-[1.1rem] leading-relaxed text-zinc-400 mb-5">
              Your trusted partner for premium<br />
              chat solutions and customer<br />
              engagement tools.
            </p>
            <div className="flex gap-4 text-zinc-400">
              <Link href="#" passHref legacyBehavior>
                <a className="hover:text-white text-sm">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a className="hover:text-white text-sm">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a className="hover:text-white text-sm">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a className="hover:text-white text-sm">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-[1.1rem] font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/Products" className="text-zinc-400 hover:text-white text-base font-semibold">AI Chatbots</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Live Chat</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Analytics</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Integrations</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-[1.1rem] font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Help Center</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Documentation</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">API Reference</Link></li>
              <li><Link href="/Contacts" className="text-zinc-400 hover:text-white text-base font-semibold">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[1.1rem] font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/About" className="text-zinc-400 hover:text-white text-base font-semibold">About Us</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Careers</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Privacy Policy</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white text-base font-semibold">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-zinc-400">
          <p>&copy; 2024 ChatSupplies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
