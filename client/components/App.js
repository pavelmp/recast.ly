{/*var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer currentVideo = {window.exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videoCollection = {window.exampleVideoData}/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));*/}
window.searchYouTube(window.options, function(data){
  window.dataStorage = data.items;
});
class App extends React.Component {
  constructor() {
    super();
    this.state = {videoCollection: window.dataStorage,
                  currentVideo: window.dataStorage[0]};
  }

  handleClick(clickedVideo) {
    this.setState({currentVideo: clickedVideo})
    console.log(this);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer  currentVideo = {this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.handleClick.bind(this)} videoCollection = {this.state.videoCollection}/>
        </div>
      </div>);
  }  
}


//window.app = new App();
setTimeout(function(){ReactDOM.render(<App />, document.getElementById('app'))}, 4000);