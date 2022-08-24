import React from 'react';
import './HornCount.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from './data.json'

class HornCount extends React.Component {
  filter = (e) => {
    const numOfHorns = parseInt(e.target.value);
    let beastData = data;
    if (numOfHorns) {
      beastData = data.filter((numBeast) => numBeast.horns === numOfHorns);
    }
    this.props.allBeasts(beastData);
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="hornedChoices.ControlSelect1">
            <Form.Label>Filter by number of horns:</Form.Label>
            <Form.Control id="formcontrol" as="select" onChange={this.filter}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default HornCount;