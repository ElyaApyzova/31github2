import React from "react";
import "../LifeCycle/LifeCycles.css";
import "../LifeCycle/normalize.css";

export class LifeCycles extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 1,
      /*count: 0,*/
    };
  }

  onPlus = () => {
    this.setState((prevState) => ({
      inputValue: prevState.inputValue + 1,
      /*count: prevState.count - 1,*/
    }));
  };

  onMinus = () => {
    this.setState((prevState) => ({
      inputValue: prevState.inputValue - 1,
      /*count: prevState.count + 1,*/
    }));
  };

  onReset = () => {
    this.setState({
      inputValue: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="lifecycles-container">
          <button className="lifecycles-button" onClick={this.onPlus}>
            +
          </button>
          <div className="lifecycles-value">{this.state.inputValue}</div>

          <button className="lifecycles-button" onClick={this.onMinus}>
            -
          </button>
        </div>
        <button className="reset-btn" onClick={this.onReset}>
          Reset
        </button>
      </div>
    );
  }
}
