var Nav = ({onKey}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search onKey = {onKey}/>
    </div>
  </nav>
);

window.Nav = Nav;
