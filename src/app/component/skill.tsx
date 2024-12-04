import { FaRegCheckSquare } from "react-icons/fa";
import "@/app/styles/skill.css"; // Import the CSS file



export default function Skill() {
    return (
        <div id="skill">
            <section className="skill-section">
                <div className="skill-container">
                    <div className="skill-title">
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-wrapper">
                        {/* Skills1 */}
                        <div className="skill-item">
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <FaRegCheckSquare className="icon" />
                                    </div>
                                    <h2>HTML</h2>
                                </div>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "100%" }}></div>
                                    </div>
                                    <p className="progress-text">100%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills2 */}
                        <div className="skill-item">
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <FaRegCheckSquare className="icon" />
                                    </div>
                                    <h2>CSS</h2>
                                </div>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "80%" }}></div>
                                    </div>
                                    <p className="progress-text">80%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills3 */}
                        <div className="skill-item">
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <FaRegCheckSquare className="icon" />
                                    </div>
                                    <h2>Javascript/TypeScript</h2>
                                </div>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "80%" }}></div>
                                    </div>
                                    <p className="progress-text">80%</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills4 */}
                        <div className="skill-item">
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <FaRegCheckSquare className="icon" />
                                    </div>
                                    <h2>Python</h2>
                                </div>
                                <div className="skill-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "70%" }}></div>
                                    </div>
                                    <p className="progress-text">70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
