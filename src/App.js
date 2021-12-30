import ProfilePic from "./assets/profile-pics/profile-1.png";
import Email from "./assets/social-icons/email-svg.svg";
import Github from "./assets/social-icons/github-svg.svg";
import Linkedin from "./assets/social-icons/linkedin-svg.svg";
import Resume from "./assets/social-icons/resume-svg.svg";
import Spotify from "./assets/social-icons/spotify-svg.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <img className="profile-pic" src={ProfilePic} />
      </div>
      <div className="right-column">
        <div className="title">hi! my name is emily lin.</div>
        <div className="description">
          I’m a third year software engineering student at the University of
          Waterloo. Previously, I’ve worked as a software engineer at RBC and TD
          innovation labs. I’m passionate about mobile and web dev, and I’m
          hoping to gain some experience in the AR/VR space.
          <br></br>
          <br></br>I spend a lot of my free time working as co-pres of the UW
          Acabellas and as a backend developer for Develop for Good. My other
          hobbies include badminton, violin, hula hooping, shopping, binging tv
          shows, and playing the mouth trumpet.
          <br></br>
          <br></br>
        </div>
        <div className="social-media-icons">
          <div className="social-media-icon">
            {" "}
            <img src={Email} />{" "}
          </div>
          <div className="social-media-icon">
            {" "}
            <img src={Github} />{" "}
          </div>
          <div className="social-media-icon">
            {" "}
            <img src={Linkedin} />{" "}
          </div>
          <div className="social-media-icon">
            {" "}
            <img src={Spotify} />{" "}
          </div>
          <div className="social-media-icon">
            {" "}
            <img src={Resume} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
