import "./styling.css";
function About() {
    return (
        <div className="aboutmain">
            <h1 className="aboutheading">About</h1>
            <div className="abouttext">
                <h3>I'm a third year Computer 
                Science undergraduate
                student with a passion for
                technology. I have technical
                experience in using
                numerous programming
                languages and frameworks for several projects but I commonly work on 
                Front-End and Web Frameworks.
                Fluent in English, Malayalam
                and French with strong
                communication skills and
                technical writing ability.
                </h3>
            </div>
            <div>
                <button className="resume-button">View Resumé</button>
            </div> 
        </div>
    );
}
export default About;