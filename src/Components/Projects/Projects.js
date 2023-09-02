import "./styling.css";

function Projects() {
    const handleClick = (str) => () => {
        window.open(str);
      };
    return (
        <div className="projectsmain">
            <div className="projectsheading"><span>Projects</span></div>
            <div className="projectstext">
                <div className="project project1" onClick={handleClick("https://github.com/prnv0/figmaplugin")}><img className="projimg colorus" alt="project"></img><h1>Colorus</h1><span> Your go-to color palette generator plugin for Figma! Unleash creativity with random palettes or input a hex code for a personalized selection. Click to copy hexcodes of five captivating colors for your design endeavors. Elevate inspiration with Colorus - where hues meet innovation!</span></div>
                <div className="project project2" onClick={handleClick("https://github.com/prnv0/pdf-to-text")}><img className="projimg legalreader" alt="project"></img><h1>LegalReader</h1><span>This project harnesses the power of AI to make legal documents accessible and easy to understand. Through advanced summarization algorithms, we transform convoluted law jargon into clear, concise, and reader-friendly content, ensuring that legal information is accessible to everyone.</span></div>
                <div className="project project3" onClick={handleClick("https://github.com/prnv0/shnelectron")}><img className="projimg todo" alt="project"></img><h1>To-Do App</h1><span> This project is a fun and user-friendly to-do app built with Electron. Users can add and delete tasks, and the app stores each task in the local file system, ensuring that nothing gets lost even if the app is closed or the computer is shut down. It is a standalone application for Windows</span></div>
            </div>
        </div>
    );
}
export default Projects;