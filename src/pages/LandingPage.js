import ProfilePic from "../assets/profile-pics/profile-3.png";
import ProfilePicBorder from "../assets/profile-pics/pfp-border-1.svg";

import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <div className="floating-box">
        <div className="left-column">
          <div className="profile-stack">
            <img
              className="pfp-border"
              src={ProfilePicBorder}
              alt="pfp border"
            />
            <img
              className="pfp-picture"
              src={ProfilePic}
              alt="this is supposed to be a picture of me"
            />
          </div>
        </div>
        <div className="right-column">
          <div className="title">
            <p className="typed-out">hi! my name is emily lin.</p>
          </div>
          <div className="description">
            I’m a third year software engineering student at the University of
            Waterloo. Previously, I’ve worked as a software engineer at the TD
            innovation labs and at RBC. I’m passionate about mobile and web dev,
            and I’m hoping to gain some experience in the AR/VR space!
            <br></br>
            <br></br>I most of my free time working as a co-pres of the UW
            Acabellas and as a backend developer for Develop for Good. My other
            hobbies include badminton, violin, hula hooping, listening to
            musicals, binging tv shows, and playing the mouth trumpet.
            <br></br>
            <br></br>
            I’m actively searching for Summer 2022 opportunities :)
            <br></br>
            <br></br>
          </div>
          <div className="social-media-icons">
            <a href="https://github.com/emilyylin">
              <div className="social-media-icon" id="github" />
            </a>
            <a href="https://www.linkedin.com/in/emilyshuyanlin/">
              <div className="social-media-icon" id="linkedin" />
            </a>
            <a href="mailto:emilyylin17@gmail.com">
              <div className="social-media-icon" id="email" />
            </a>
            <a href="https://open.spotify.com/user/222vgpvjtzhjrowfbxcniupja?si=42a3e5fea3c34d64">
              <div className="social-media-icon" id="spotify" />
            </a>
            <a href="https://drive.google.com/file/d/1soTPATJ6MjuDRDXQOn6LnwhyrKdF0FAw/view?usp=sharing">
              <div className="social-media-icon" id="resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
