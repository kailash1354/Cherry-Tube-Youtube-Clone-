import React from "react";
import "./Video.css"; // We'll create this file next
import PlayVideo from "../PlayVideo/PlayVideo";
import Recommended from "../Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
