class App extends React.Component {
  constructor() {
    super();
    this.state = {videoCollection: exampleVideoData, currentVideo: exampleVideoData[0]};
  }

  handleClick(video) {
    this.setState({currentVideo: video});
  }

  newState(data) {
    this.setState({currentVideo: data.items[0], videoCollection: data.items})
  };
  
  updateVideos(query) {
    searchYouTube({query:query, key: window.YOUTUBE_API_KEY, max: 10},this.newState.bind(this));
  }

  componentDidMount() {
    searchYouTube({query:'dogs', key: window.YOUTUBE_API_KEY, max: 10},this.newState.bind(this));
  }

  render() {
    return (
      <div>
        <Nav onKey = {this.updateVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.handleClick.bind(this)} videos = {this.state.videoCollection}/>
        </div>
      </div>);
  }  

}

ReactDOM.render(<App />, document.getElementById('app'))

