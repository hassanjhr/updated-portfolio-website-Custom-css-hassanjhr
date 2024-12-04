import Link from "next/link";
import Image from "next/image";
import "@/app/styles/projects.css"; // Import the CSS file



export default function Projects() {
  return (
    <div id="project">
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h1>My Projects</h1>
          </div>
          <div className="projects-wrapper">
            {/* Project 1 */}
            <div className="project-item">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src="/assests/pictures/project1.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="project-info">
                <h2 className="project-category">Resume Builder</h2>
                <h1 className="project-title">Dynamic</h1>
                <p className="project-description">
                  This project represents a dynamic resume builder.
                </p>
                <Link target="_blank" href="https://updated-milestone5-hassanjhr.vercel.app/">
                  <p className="project-link">View Project</p>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-item">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src="/assests/pictures/project2.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="project-info">
                <h2 className="project-category">Responsive Website</h2>
                <h1 className="project-title">Landing Page</h1>
                <p className="project-description">
                  This project represents the Landing Page of Panacloud.
                </p>
                <Link target="_blank" href="https://panacloud-landing-page-hassanjhr.vercel.app/">
                  <p className="project-link">View Project</p>
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-item">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src="/assests/pictures/project3.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="project-info">
                <h2 className="project-category">Simple Calculator</h2>
                <h1 className="project-title">Responsive</h1>
                <p className="project-description">
                  This project represents a simple calculator using HTML, CSS, & JavaScript.
                </p>
                <Link target="_blank" href="https://calculator-hassanjhr.vercel.app/">
                  <p className="project-link">View Project</p>
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-item">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src="/assests/pictures/project4.png"
                  width={500}
                  height={500}
                />
              </div>
              <div className="project-info">
                <h2 className="project-category">Timer</h2>
                <h1 className="project-title">CountDown</h1>
                <p className="project-description">
                  This project represents a countdown timer.
                </p>
                <Link target="_blank" href="https://time-counter-hassanjhr.vercel.app/">
                  <p className="project-link">View Project</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
