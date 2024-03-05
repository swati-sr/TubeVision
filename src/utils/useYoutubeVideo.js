import { useLayoutEffect, useState } from "react";
import { GET_YOUTUBE_VIDEO_API } from "./constants";

const useYoutubeVideo = () => {
  const [videos, setVideos] = useState([]);
  useLayoutEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(GET_YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
};

export default useYoutubeVideo;
