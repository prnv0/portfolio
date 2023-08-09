import "./styling.css";
import homebg from '../Assets/Home.svg'
function Home() {
    return (
    <div className="main">
       
        <div className="nav">
            <div className="nav-option">
                <a href="#about">About</a>
            </div>
            <div className="nav-option">
                <a href="#skills">Skills</a>
            </div>
            <div className="nav-option">
                <a href="#projects">Projects</a>
            </div>
            <div className="nav-option">
                <a href="#contact">Contact</a>
            </div>
        </div>
        <h1 className="hometext">
            Hi I'm<br></br>
            Pranav Sat
        </h1>
        <div className="subtext">
            <section class="animation">
                <div class="first"><div>Web Developer</div></div>
                <div class="second"><div>UI/UX Designer</div></div>
                <div class="third"><div>Content Writer</div></div>
                <div class="fourth"><div>Web Developer</div></div>
            </section>
        </div>

    </div>
    
    );
}
export default Home;