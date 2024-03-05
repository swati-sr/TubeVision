const GOOGLE_AUTH_KEY = "AIzaSyCWrV8nmatIh_c6So94zlmqYjFslxJvGnk";

export const GET_YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_AUTH_KEY;
