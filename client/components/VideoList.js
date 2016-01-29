var VideoList = ({onClick, videos}) => (
  <div className="video-list media">
    {videos.map((video) => {
        return <VideoListEntry onClick = {onClick} video = {video} key = {video.etag}/>    
    })}
  </div>
);

window.VideoList = VideoList;
