import Link from "next/link";
import "@/app/styles/about.css"; // Importing custom CSS

export default function About() {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
              I am Muhammad Hassan Jawaid, a multifaceted professional with a
              Bachelor degree in Finance and an MS in Data Science from Szabist,
              Karachi, currently enhancing my expertise through a certification in
              Artificial Intelligence from GIAIC. My portfolio showcases a blend
              of analytical prowess and digital innovation, featuring projects
              in web development, data-driven solutions, and AI implementations.
            </p>
            <p className="about-text">
              I specialize in creating user-friendly, impactful web experiences
              that integrate advanced data analysis and AI technologies,
              demonstrating my commitment to driving sustainable and intelligent
              solutions. Explore my work to see how I merge finance, data
              science, and web development to craft transformative digital
              solutions.
            </p>
            <div className="about-button-container">
              <Link href={'/assests/Resume/myResume.pdf'}>
                <button className="about-button">
                  View Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
