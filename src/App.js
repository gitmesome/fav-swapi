import logo from './new-replubic.svg';
import './App.css';
import React, {Component} from "react";
import SearchPerson from './components/SearchPerson.js';
import SingleSearchResult from './components/SingleSearchResult.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchForPerson = this.searchForPerson.bind(this);
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/1")
      .then(response =>  response.json())
      .then(data => {
          this.setState({
            character: data
          })
        }
      )
  }

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
  
  handleChange(event){
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    let result;
    if ( this.state.character.length > 0 ) {
      result = this.state.character.map((res) => ( <SingleSearchResult key={res.url} res={res} /> ))
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p>Star Wars Charter Search Terminal</p>
        </header>
        <div>
          <SearchPerson searchForPerson = { this.searchForPerson } />
        </div>
        <div>
          <br />
          <div className="row">
            {result}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
