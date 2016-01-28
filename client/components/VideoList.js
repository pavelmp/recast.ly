var VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry onClick={props.onClick.bind(this)} curState = {props.curState}/>
   {/*} <VideoListEntry video = {props.videoCollection[1]}/>
    <VideoListEntry video = {props.videoCollection[2]}/>
    <VideoListEntry video = {props.videoCollection[3]}/>
    <VideoListEntry video = {props.videoCollection[4]}/>
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />*/}
  </div>
);

window.VideoList = VideoList;
