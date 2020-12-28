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

  return (
    <div class="col-sm-3">
      <div class="card" style={cardStyle}>
        <div class="card-body">
          <h5 class="card-title" style={titleStyle}>{props.res.name}</h5>
          <ul style={bodyStyle}>
            <li>Height: {props.res.height} cm</li>
            <li>Eye Color: {props.res.eye_color}</li>
            <li>Birth Year: {props.res.birth_year}</li>
          </ul>
        </div>
      </div>
    </div>
);
}

export default SingleSearchResult
