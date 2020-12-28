import React from 'react';

export class SearchPerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_string: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <label>Search: </label>
        <input type="text" name="search_string" placeholder="Enter A Character Name" onChange={this.handleChange}/>
        <button onClick= {()  => this.props.searchForPerson(this.state.search_string) }>Hit it Chewie!</button>
      </div>
    );
  }
}

export default SearchPerson;
