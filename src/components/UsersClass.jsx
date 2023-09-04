import React, { Component } from "react";

export class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // Birth stage- call method after component is rendered
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("response:", data); //logging response to console to check data availability
        this.setState({ users: data }); //updating users property in the state with the list of users retrieved from the API.
        console.log("updated users:", this.state.users); //logging the state tothe console to check data(list of users) availability
      });
    // .catch((error) => {
    //   console.log("Fetched error:", error);
    // });
  }
  render() {
    return (
      <div>
        <h3>UsersClass</h3>
        {/* Rendering the list of users to the browser */}
        {this.state.users.map((user) => (
          <div key={user.id}>
            <ul>
              <li>Name: {user.name}</li>
              <li>Username: {user.username}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;
