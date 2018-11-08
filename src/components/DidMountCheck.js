import React from "react";
import ShouldCompCheck from "./ShouldCompCheck";

export default class DidMountCheck extends React.Component {
  state = {
    currentTime: 1
  };

  unSubscribeInterval = null;

  updateTimeCount = () => {
    console.error(this.state.currentTime);
    this.setState({
      currentTime: this.state.currentTime + 1
    });
  };

  componentWillMount() {
    console.log("called At inital Render componentWillMount");
  }

  render() {
    // console.error("calling : render", this.unSubscribeInterval);
    return (
      <>
        <button onClick={this.updateTimeCount}>
          Update Child Comp {this.state.currentTime}
        </button>
        <ShouldCompCheck count={this.state.currentTime} />
      </>
    );
  }

  componentDidMount() {
    console.log("called At inital Render componentDidMount");
  }

  componentWillUnmount() {}
}
