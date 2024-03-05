const VideoCard = ({ details }) => {
  const { snippet, statistics } = details;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-96 m-2 p-2 mt-6 cursor-pointer">
      <img
        className="rounded-lg border shadow-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li>{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} views</li>
        <li>{statistics.likeCount} likes</li>
      </ul>
    </div>
  );
};

export default VideoCard;
