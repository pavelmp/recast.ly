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

class App extends React.Component {
  constructor() {
    super();
    this.state = {videoCollection: window.exampleVideoData,
                  currentVideo: window.exampleVideoData[0]};
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
ReactDOM.render(<App />, document.getElementById('app'));