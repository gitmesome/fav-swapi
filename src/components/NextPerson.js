import React from 'react';

export class NextPerson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <label>Search: </label>
        <input type="text" placeholder="Enter A Character" />
      </div>
    );
  }
}

export default NextPerson;
