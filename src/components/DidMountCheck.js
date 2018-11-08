import React from "react";
import ShouldCompCheck from "./ShouldCompCheck";
import Header from "./Header";

export default class DidMountCheck extends React.Component {
  state = {
    currentTime: {
      val: 0
    },
    data : ''
  };

  unSubscribeInterval = null;

  updateTimeCount = () => {
    console.error(this.state.currentTime);
    this.setState({
      currentTime: {
        val: this.state.currentTime.val + 1
      }
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
          Update Child Comp {this.state.currentTime.val}
        </button>
        <ShouldCompCheck data={this.state.data} elem={<Header />} nodeT={[1,2,3]}/>
      </>
    );
  }

  componentDidMount() {
    console.log("called At inital Render componentDidMount");
  }

  componentWillUnmount() {}
}
