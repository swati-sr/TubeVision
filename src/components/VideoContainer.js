import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useYoutubeVideo from "../utils/useYoutubeVideo";

const VideoContainer = () => {
  const videos = useYoutubeVideo();
  return (
    <div className="flex flex-wrap">
      {videos.map((element) => {
        return (
          <Link to={"/watch?v=" + element.id} key={element.id}>
            <VideoCard details={element} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
