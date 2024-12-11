import React, { Component } from "react";
import ReactPlayer from "react-player";
export default class Video extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="video">
            <ReactPlayer
              className="react-player"
              url="videos/video.mp4"
              controls={true}
            />
          </div>
        </div>
      </>
    );
  }
}
