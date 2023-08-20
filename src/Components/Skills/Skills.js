import "./styling.css";
import "../../../node_modules/nes.css/css/nes.min.css"
function Skills() {
    return (
        <div className="skillsmain">
            <h1 className="skillsheading">Skills</h1>
            <div className="skillstext">
                <div className="skill nes-container is-dark">Python</div>
                <div className="skill">Java</div>
                <div className="skill">Javascript</div>
                <div className="skill">C</div>
                <div className="skill">ReactJS</div>
                <div className="skill">Flask</div>
                <div className="skill">MySQL</div>
                <div className="skill">Google Cloud</div>
            </div>
        </div>
    );
}
export default Skills;