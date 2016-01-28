class App extends React.Component {
  constructor() {
    super();
    this.state = {videoCollection: window.exampleVideoData,
                  currentVideo: window.exampleVideoData[0]};
  }

  handleClick(clickedVideo) {
    this.setState({currentVideo: clickedVideo})
  }

  componentDidMount() {
    window.options = {query: 'dogs',max: 5,key: window.YOUTUBE_API_KEY};
    var newCallback = (data) => {
      this.setState({videoCollection: data.items,
                   currentVideo: data.items[0]});  
    };
    window.searchYouTube(window.options, newCallback);
    };

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

ReactDOM.render(<App />, document.getElementById('app'))