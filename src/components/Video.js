import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="video shadow ">
      <ReactPlayer url="https://www.youtube.com/watch?v=nCPrJM-KDYc" controls />
    </div>
  );
};

export default Video;
