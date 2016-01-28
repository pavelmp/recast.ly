var VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry onClick={props.onClick.bind(this)} video = {props.videoCollection[0]}/>
    <VideoListEntry onClick={props.onClick.bind(this)} video = {props.videoCollection[1]}/>
    <VideoListEntry onClick={props.onClick.bind(this)} video = {props.videoCollection[2]}/>
    <VideoListEntry onClick={props.onClick.bind(this)} video = {props.videoCollection[3]}/>
    <VideoListEntry onClick={props.onClick.bind(this)} video = {props.videoCollection[4]}/>
    {/*<VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />*/}
  </div>
);

window.VideoList = VideoList;
