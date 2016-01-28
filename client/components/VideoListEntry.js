var VideoListEntry = (props) => (
  <div className="video-list-entry" >
    <div className="media-left media-middle">
      <img className="media-object" src={props.curState.videoCollection[0].snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick ={props.onClick.bind(this)} className="video-list-entry-title">title</div>
      <div className="video-list-entry-detail">description</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
