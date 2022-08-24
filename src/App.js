import React from 'react';
import './App.css';
import Header from './Header.js';
import Header2 from './Header2.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast'
import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      beastData: data,
      selectedBeast: {}
    }
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }
  hideModal = () => {this.setState({displayModal: false});
  }
  allBeasts = (beastData) => {this.setState({beastData});
  }
  render() {
    return (
      <div>
        <Header />
        <Header2 />
        <Main 
          showModal={this.showModal}
          beasts={this.state.beastData}
          allBeasts={this.allBeasts} 
        />
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div> 
    )
  }
}

export default App;