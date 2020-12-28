import logo from './new-replubic.svg';
import './App.css';
import React, {Component} from "react";
import SearchPerson from './components/SearchPerson.js';

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
        .then(data => {
            this.setState({
              character: data
            })
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> AND save to reload now.
          </p>
          <p>
            <SearchPerson searchForPerson = { this.searchForPerson } />
          </p>
          <p>
            We got {this.state.character.name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
