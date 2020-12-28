function SingleSearchResult(props){
  return (
    <ul>
      <li>Name: {props.res.name}</li>
      <li>Height: {props.res.height}</li>
      <li>Eye Color: {props.res.eye_color}</li>
      <li>Birth Year: {props.res.birth_year}</li>
    </ul>
  );
}

export default SingleSearchResult
