import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
      g: 0,
      b: 0
    }
    this.handleRedSlider = this.handleRedSlider.bind(this);
    this.handleGreenSlider = this.handleGreenSlider.bind(this);
    this.handleBlueSlider = this.handleBlueSlider.bind(this);
  };


  handleRedSlider = e => {
    this.setState({ r: e.target.value });
  };

  handleGreenSlider = e => {
    this.setState({ g: e.target.value });
  }

  handleBlueSlider = e => {
    this.setState({ b: e.target.value })
  }

  render() {
    // console.log(this.state.r);
    // console.log(this.state.g);
    // console.log(this.state.b);
    return (
      <div
        className="App"
        style={{
          backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`,
          width: '100vw',
          height: '100vh',
        }}
      >
        <form>

          <div>
            Red
          <input
              id="R"
              value={this.state.r}
              type="range"
              min="0"
              max="255"
              onChange={this.handleRedSlider}
            />
          </div>
          <div>
            Green
          <input
              id="G"
              value={this.state.g}
              type="range"
              min="0"
              max="255"
              onChange={this.handleGreenSlider}
            />
          </div>
          <div>
            Blue
          <input
              id="B"
              value={this.state.b}
              type="range"
              min="0"
              max="255"
              onChange={this.handleBlueSlider}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;