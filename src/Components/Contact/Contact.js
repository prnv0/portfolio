import "./styling.css";
function Contact() {
    const socialClick = (str) => () => {
        window.open(str);
      };
    return (
        <div className="contactmain">
            <div className="contact" onClick={socialClick("mailto:pranavs13@gmail.com")}><img alt="" className="contactimg mail"></img></div>
            <div className="contact" onClick={socialClick("https://www.linkedin.com/in/prnvv/")}><img alt="" className="contactimg linkedin"></img></div>
            <div className="contact" onClick={socialClick("https://github.com/prnv0/")}><img alt="" className="contactimg github"></img></div>
        </div>
        
    );
}
export default Contact;