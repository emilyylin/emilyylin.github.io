import ProfilePic from "./assets/profile-pics/profile-1.png";
import ProfilePicBorder from "./assets/profile-pics/pfp-border-1.svg";
import Email from "./assets/social-icons/email-svg.svg";
import Github from "./assets/social-icons/github-svg.svg";
import Linkedin from "./assets/social-icons/linkedin-svg.svg";
import Resume from "./assets/social-icons/resume-svg.svg";
import Spotify from "./assets/social-icons/spotify-svg.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="floating-box">
        <div className="left-column">
          <div className="profile-stack">
            <img className="pfp-border" src={ProfilePicBorder} />
            <img className="pfp-picture" src={ProfilePic} />
          </div>
        </div>
        <div className="right-column">
          <div className="title">
            <p className="typed-out">hi! my name is emily lin.</p>
          </div>
          <div className="description">
            I’m a third year software engineering student at the University of
            Waterloo. Previously, I’ve worked as a software engineer at RBC and
            at the TD innovation labs. I’m passionate about mobile and web dev,
            and I’m hoping to gain some experience in the AR/VR space!
            <br></br>
            <br></br>I spend a lot of my free time working as a co-pres of the
            UW Acabellas and as a backend developer for Develop for Good. My
            other hobbies include badminton, violin, hula hooping, listening to
            musicals, binging tv shows, and playing the mouth trumpet.
            <br></br>
            <br></br>
            I’m actively searching for Summer 2022 opportunities :)
            <br></br>
            <br></br>
          </div>
          <div className="social-media-icons">
            <a href="https://github.com/emilyylin">
              <div className="social-media-icon"></div>
              <img src={Github} className="github" />
            </a>
            <a href="https://www.linkedin.com/in/emilyshuyanlin/">
              <img src={Linkedin} className="social-media-icon" />
            </a>
            <a href="mailto:emilyylin17@gmail.com">
              <img src={Email} className="social-media-icon" />
            </a>
            <a href="https://open.spotify.com/user/222vgpvjtzhjrowfbxcniupja?si=42a3e5fea3c34d64">
              <img src={Spotify} className="social-media-icon" />
            </a>
            <a href="">
              <img src={Resume} className="social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
