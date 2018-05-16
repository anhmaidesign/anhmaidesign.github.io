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
    img: 'files/cl-cover.png',
    id: '2',
    link: '/cl',
    title: 'Craigslist',
    info: 'Mobile App Proposal (In-Progress Academic Project)'
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
    img: 'files/hp-cover.png',
    id: '5',
    link: '/hp',
    title: 'Hopper',
    info: 'Mobile App Redesign (Academic Project)'
  },
  {
    img: 'files/octo-cover.png',
    id: '6',
    link: '/octo',
    title: 'Octo Sushi',
    info: 'Rebranding Case Study (Academic Project)'
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