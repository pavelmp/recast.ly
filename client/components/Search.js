var Search = ({onKey}) => {
  var clicked = function(event){
    var text = $('.form-control').val();
    onKey(text);
  }
  
  return (
    <div className="search-bar form-inline">
      <input className="form-control" onKeyUp={_.debounce(clicked,400)} type="text" />
      <button onClick={clicked} className = "btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

window.Search = Search;
