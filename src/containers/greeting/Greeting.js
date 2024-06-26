import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import VideoComponent from "../../components/videoComponent/VideoComponent";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <SocialMedia theme={theme} />
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
            </div>
          </div>
          <div className="greeting-image-video-div">
            <div className="feeling-proud">
              <FeelingProud theme={theme} />
            </div>
            <div className="video-component">
              <VideoComponent theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
