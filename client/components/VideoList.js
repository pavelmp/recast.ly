var VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry video = {props.videoCollection[0]}/>
    <VideoListEntry video = {props.videoCollection[1]}/>
    <VideoListEntry video = {props.videoCollection[2]}/>
    <VideoListEntry video = {props.videoCollection[3]}/>
    <VideoListEntry video = {props.videoCollection[4]}/>
    {/*<VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />*/}
  </div>
);

window.VideoList = VideoList;
