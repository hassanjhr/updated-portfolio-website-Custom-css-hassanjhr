"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import "@/app/styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <div className="navbar-content">



          {/* Logo and Name on the left */}
          <a className="navbar-logo">
            {/* <Image
              src="/assests/pictures/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="logo-image"
            /> */}
            <span className="navbar-title">HassanJHR</span>
          </a>




          {/* Hamburger menu on the right (only visible on mobile) */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>





          {/* Navigation menu */}
          <nav className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
            <Link href={"/"} className="navbar-link">
              Home
            </Link>
            <Link href={"#about"} className="navbar-link">
              About
            </Link>
            <Link href={"#skill"} className="navbar-link">
              Skills
            </Link>
            <Link href={"#project"} className="navbar-link">
              Projects
            </Link>
            <Link href={"#Contact"} className="navbar-link">
              Contact
            </Link>






            {/* Download CV button */}
            <Link href="/assests/Resume/myResume.pdf">
              <button className="navbar-cv-button">
                Download CV <FiDownload className="text-xl" />
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
