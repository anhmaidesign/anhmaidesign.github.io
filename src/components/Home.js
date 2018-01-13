import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tile from './Tile';

const tilesData = [
  {
    img: 'files/gg-cover.png',
    id: '1',
    link: '/google-duo',
    title: 'Google Duo',
    info: 'Introducing Duo (Academic Project)'
  },
  {
    img: 'files/hp-cover.png',
    id: '2',
    link: '/hp',
    title: 'Hopper',
    info: 'Flight Mobile App Proposal (Academic Project)'
  },
  {
    img: 'files/gow-cover.jpg',
    id: '3',
    link: '/gow',
    title: 'Garden of Wisdom',
    info: 'Web Application Proposal (Academic Project)'
  },
  {
    img: 'files/wit-cover.png',
    id: '4',
    link: '/wit',
    title: 'Girls Who Code',
    info: 'Women in Tech Infographic (Academic Project)'
  },
  {
    img: 'files/dp-cover.jpg',
    id: '5',
    link: '/dp',
    title: 'First Place School',
    info: 'The Story of Digital Printing (Academic Project)'
  },
  {
    img: 'files/sam-cover.jpg',
    id: '6',
    link: '/sam',
    title: 'Seattle Art Museum',
    info: 'SAM Wayfinding posters (Academic Project)'
  }
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