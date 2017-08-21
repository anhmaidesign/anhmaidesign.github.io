import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tile from './Tile';

const tilesData = [
  {
    img: 'files/sam-cover.jpg',
    id: '1',
    link: '/sam',
    title: 'Seattle Art Museum',
    info: 'SAM Wayfinding posters'
  },
  {
    img: 'files/dp-cover.jpg',
    id: '2',
    link: '/dp',
    title: 'First Place School',
    info: 'The Story of Digital Printing'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '3',
    link: '/sam',
    title: 'Project 3',
    info: 'Coming soon'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '4',
    link: '/sam',
    title: 'Project 4',
    info: 'Coming soon'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '5',
    link: '/sam',
    title: 'Project 5',
    info: 'Coming soon'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '6',
    link: '/sam',
    title: 'Project 6',
    info: 'Coming soon'
  },
];


class Home extends React.Component {
  constructor(props) {
    super(props); 
    this.handleClickTile = this.handleClickTile.bind(this);
  }

  handleClickTile(link) {
    window.location.href = link;
  }

  render() {
    return (
      <Row>
          {
            tilesData.map((tile) => (
            <Col xs={12} sm={4} key={tile.id} style={{padding: '15px'}}>
              <Tile data={tile} onClick={this.handleClickTile}/>
            </Col>
          ))
          }
      </Row>
    );
  }
}

export default Home;