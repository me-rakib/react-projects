import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <h1>{this.props.type}</h1>
    )
  }
}