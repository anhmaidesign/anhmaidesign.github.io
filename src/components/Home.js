import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const tilesData = [
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '1',
    name: 'Project 1',
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '2',
    name: 'Project 2',
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '3',
    name: 'Project 3',
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '4',
    name: 'Project 4',
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '5',
    name: 'Project 5',
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '6',
    name: 'Project 6',
  },
];


class Home extends React.Component {

  render() {
    return (
      <Row>
          {
            tilesData.map((tile) => (
            <Col xs={12} sm={4} key={tile.id}>
              <img src={tile.img} className="porfolio-tile"/>
            </Col>
          ))
          }
      </Row>
    );
  }
}

export default Home;