import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return <p>Loading...</p>;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail-image"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};


export const AdVideoCard = ( {info} ) => {
  return(
    <div className="m-1 p-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
