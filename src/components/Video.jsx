import React, { Component } from "react";
import ReactPlayer from "react-player";
export default class Video extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="video">
            <ReactPlayer
              width="100%"
              height="auto"
              playing={true}
              loop={true}
              volume={null}
              muted={true}
              url="videos/video.mp4"
              controls={true}
              style={{ justifyContent: "center", display: "flex" }}
              
            />
          </div>
        </div>
      </>
    );
  }
}
