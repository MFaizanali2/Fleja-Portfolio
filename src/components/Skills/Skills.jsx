import './Skills.css'
import skillsInfo from "../../utils/constant/Skills.js";

const Skills = () => {
    return (
        <section className="skills-section">
            <h2 className="section-title">{skillsInfo.title}</h2>
            <div className="skills-container">
                <div className="skills-list">
                    {skillsInfo.skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                            <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                    ))}
                </div>

                <div className="skills-description">
                    <h3 className="skills-title">{skillsInfo.section.heading}</h3>
                    <p className="skills-text">{skillsInfo.section.description1}</p>
                    <p className="skills-text">{skillsInfo.section.description2}</p>
                    <button className="hire-button">Hire Me</button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
