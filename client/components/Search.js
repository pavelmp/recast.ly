var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button onClick={submitQuery} className = "btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

var submitQuery = function() {
  window.options.query = $('.form-control').val();
  console.dir(window.options);
  window.searchYouTube(window.options, window.newCallback)
}


$(document).on('keyup','.form-control',function(event){
  if(event.keyCode == 13) {
    submitQuery();
  }
})

window.Search = Search;
