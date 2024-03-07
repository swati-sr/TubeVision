import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideMenu } from "../utils/sideMenuSlice";
import useYoutubeVideo from "../utils/useYoutubeVideo";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  const videos = useYoutubeVideo();
  const filteredVideos = videos.filter((video) => video.id === id);

  useEffect(() => {
    dispatch(closeSideMenu());
  }, []);

  return (
    <div>
      <div className="px-4 pt-4 mx-4 my-4">
        <iframe
          width="800"
          height="400"
          className="  border rounded-xl"
          src={"https://www.youtube.com/embed/" + id}
          title="Youtube media player"
        />
        <ul className="pt-3">
          {filteredVideos.map((video) => {
            return (
              <div key={video.id}>
                <li className="font-bold text-xl">
                  {video.snippet.channelTitle}
                </li>
                <li className="font-semibold text-md">{video.snippet.title}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="px-8">
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;
