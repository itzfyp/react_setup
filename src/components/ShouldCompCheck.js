import React from "react";
export default class ShouldCompCheck extends React.Component {
  state = {
    val: this.props.count
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);

    return { ...state };
  }

  shouldComponentUpdate(nxtProps, nxtState) {
    console.log("ShouldCompCheck shouldComponentUpdate", nxtProps, nxtState);
    return true;
  }

  static getSnapshotBeforeUpdate(prevProps, prevState) {
    /*   if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    } */
    console.log(
      "ShouldCompCheck getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );

    return null;
  }

  onChangeFunc = e => {
    this.setState({
      val: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.val}
          onChange={this.onChangeFunc}
          onBlur={this.onChangeFunc}
        />
        {this.state.val == 4 ? <p>{this.state.val}</p> : null}
      </>
    );
  }

  componentDidUpdate(prevProps) {
    console.log("ShouldCompCheck componentDidUpdate", prevProps);
  }

  componentDidMount() {
    console.log("called At inital Render ShouldCompCheck DidMount");
  }
}
