import HornedBeast from './HornedBeast.js';
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import HornCount from './HornCount.js';

class Main extends React.Component {  
  render() {
    return (
      <div>
        <HornCount
          allBeasts={this.props.allBeasts} 
        />
        <CardGroup> 
          {this.props.beasts.map((singleBeast, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={singleBeast.title}
                  img={singleBeast.image_url}
                  description={singleBeast.description}
                  horns={singleBeast.horns}
                />
              </div>
            )
          })}
        </CardGroup>
      </div>
    )
  }
}

export default Main;

