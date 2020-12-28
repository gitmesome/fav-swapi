import logo from './new-replubic.svg';
import './App.css';
import React, {Component} from "react";
import SearchPerson from './components/SearchPerson.js';
import SingleSearchResult from './components/SingleSearchResult.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      favorites: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchForPerson = this.searchForPerson.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  /* --Dont need this until we get some persitancy--
   * componentDidMount(){
   * fetch("https://swapi.dev/api/people/1")
   *   .then(response =>  response.json())
   *   .then(data => {
   *       this.setState({
   *         character: data
   *       })
   *     }
   *   )
   * }
   */

  searchForPerson(search_string){
    if( search_string){
      fetch("https://swapi.dev/api/people/?search=" + search_string)
        .then(response =>  response.json())
        .then((data) => {
            if (data.count > 0){
              this.setState({
                character: data.results
              });
            }else{
              alert("Negative, negative, it didn't go in. It just impacted on the surface!");
            }
          },
          (error) => {
            alert("Error on fetch");
          }
        )
    }else{
      alert("Do or do not!  There is no trying with an empty string");
    }
  }

  addToFavorites(url){
    let fav = this.state.character.find((character) => character.url === url);
    let new_favorites = this.state.favorites.concat(fav);
    let new_character = this.state.character.filter((character) => character.url !== url);
    this.setState({
      character: new_character,
      favorites: new_favorites
    });
  }
  
  handleChange(event){
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    let result;
    let result_label;
    if ( this.state.character && this.state.character.length > 0 ) {
      result_label = <lable><h2>Search Results</h2></lable>;
      result = this.state.character.map((res) => ( <SingleSearchResult key={res.url} res={res} addToFavorites = { this.addToFavorites }/> ))
    }
    let favorites;
    let favorites_label;
    if ( this.state.favorites.length > 0 ) {
      favorites_label = <lable><h2>My Favorites</h2></lable>;
      favorites = this.state.favorites.map((fav) => ( <SingleSearchResult key={fav.url} res={fav} /> ))
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p>Star Wars Character Search Terminal</p>
        </header>
        <div>
          <SearchPerson searchForPerson = { this.searchForPerson } />
        </div>
        <div>
          <br />
          {result_label}
          <div className="row">
            {result}
          </div>
        </div>
        <div>
          <br />
          {favorites_label}
          <div className="row">
            {favorites}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
