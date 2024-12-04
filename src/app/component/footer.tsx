import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import Image from "next/image";
import "@/app/styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <a className="footer-logo">
          {/* <Image
            src="/assests/pictures/logo.png"
            width={100}
            height={100}
            alt="Logo"
          /> */}
          <span>HassanJHR</span>
        </a>
        <p className="footer-text">©2024 HassanJHR</p>
        <span className="footer-social">
          <Link
            href={"https://www.facebook.com/"}
            target="_blank"
            className="facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://www.twitter.com/"}
            target="_blank"
            className="twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            href={"https://www.youtube.com/"}
            target="_blank"
            className="youtube"
          >
            <FaYoutube />
          </Link>
        </span>
      </footer>
    </div>
  );
}
