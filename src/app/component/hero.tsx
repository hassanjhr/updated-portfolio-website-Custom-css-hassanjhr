"use client";

import Image from "next/image";
import Link from "next/link";
// import Typewriter from "typewriter-effect";
import ProfilePic from "@/app/assests/pictures/Picture.png";
import "@/app/styles/hero.css"; // Importing the custom CSS file

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* <h1 className="hero-title">
            I am
            <br className="hero-line-break" />
            <span className="hero-typewriter">
              <Typewriter
                options={{
                  strings: ["Muhammad Hassan Jawaid", ""],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1> */}
          <div className="hero-divider"></div>

          <div className="hero-buttons">
            <Link href="#Contact">
              <button className="hero-contact-button">Contact</button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            alt="hero"
            width={500}
            height={500}
            src={ProfilePic}
          />
        </div>
      </div>
    </section>
  );
}
