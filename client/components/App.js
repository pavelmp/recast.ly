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

  handleClick() {
    this.setState({currentVideo: window.exampleVideoData[1]})
    console.log('success!')
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer  curState = {this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.handleClick.bind(this)} curState = {this.state}/>
        </div>
      </div>);
  }  
}

//window.app = new App();
ReactDOM.render(<App />, document.getElementById('app'));