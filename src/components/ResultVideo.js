import React, { useEffect, useState } from "react";
import {
  GOOGLE_AUTH_KEY,
  VIDEO_FROM_SEARCHLIST_YOUTUBE_API,
  YOUTUBE_URL,
} from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const ResultVideo = () => {
  const [querydata, setQuerydata] = useState([]);
  const [searchParam, useSearchParam] = useSearchParams();

  useEffect(() => {
    const getSearchedVideo = async () => {
      const data = await fetch(
        VIDEO_FROM_SEARCHLIST_YOUTUBE_API +
          searchParam.get("search_query") +
          "&type=video&key=" +
          GOOGLE_AUTH_KEY
      );
      const json = await data?.json();
      setQuerydata(json?.items);
    };
    getSearchedVideo();
  }, [searchParam]);

  return (
    <div>
      <ul>
        {querydata?.map((item) => (
          <li key={item.id.videoId}>
            <div className="flex">
              <div>
                <iframe
                  className="w-[700px] h-[281px] mt-10"
                  src={YOUTUBE_URL + item.id.videoId}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="ml-5 mt-10">
                <h1 className="font-bold text-5xl">
                  {" "}
                  {item.snippet.channelTitle}
                </h1>
                <h4>{item.snippet.description}</h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultVideo;
