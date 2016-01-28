var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
    {console.log(props)}
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.currentVideo.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.currentVideo.snippet.title}</h3>
      <div>{props.currentVideo.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
