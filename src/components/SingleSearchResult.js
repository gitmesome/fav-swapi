function SingleSearchResult(props){
  const cardStyle = {
    width: "18rem",
  };

  const titleStyle = {
    color: "#61DAFB",
    backgroundColor: "#282c34",
  };

  const bodyStyle = {
    textAlign: "left",
  };

  let favoritesButton = <a href="/#" className="btn btn-primary" onClick={() => props.addToFavorites(props.res.url)} >Add to Favorite</a>
  if ( !props.addToFavorites ){
    favoritesButton = undefined;
  }


  return (
    <div className="col-sm-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title" style={titleStyle}>{props.res.name}</h5>
          <ul style={bodyStyle}>
            <li>Height: {props.res.height} cm</li>
            <li>Eye Color: {props.res.eye_color}</li>
            <li>Birth Year: {props.res.birth_year}</li>
          </ul>
          {favoritesButton}
        </div>
      </div>
    </div>
);
}

export default SingleSearchResult
