const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const GOOGLE_API_KEY = "AIzaSyC0SD7BQ_7ZEeaQhuQo7YQkuewWMLcV4LE"

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
