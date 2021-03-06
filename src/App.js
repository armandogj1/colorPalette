import React from 'react';
import DropZone from './components/DropZone.js';
import Colors from './components/Colors.js';
import Canvas from './components/Canvas.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      droppedFile: null,
      colors: []
    };

    this.handleDrop = this.handleDrop.bind(this);
    this.handleColors = this.handleColors.bind(this);
  }

  handleDrop(image) {

    const newState = {...this.state};
    newState.droppedFile = image;
    this.setState(newState);
  }

  handleColors(colors) {
    const newColors = [...this.state.colors, ...colors];
    this.setState(state => ({colors: newColors}));
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Welcome to the image percolator!
        </h1>

        <DropZone
          handleFile={this.handleDrop}
        />

        {
          !this.state.colors.length ? null :
          <Canvas
            id='canvas'
            colors={this.state.colors}
          />
        }
        {
          !this.state.droppedFile ? null :
          <Colors
            image={this.state.droppedFile}
            colors={this.state.colors}
            handleColors={this.handleColors}
          />
        }
      </>
    );
  }
}

export default App;