import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tile from './Tile';

const tilesData = [
  {
    img: 'files/cl-cover.png',
    id: '1',
    link: '/cl',
    title: 'Craigslist',
    type: 'Mobile Design - iOS',
    info: 'Mobile App Proposal'
  },
  {
    img: 'files/hp-cover.png',
    id: '2',
    link: '/hp',
    title: 'Hopper',
    type: 'Mobile Design - Android',
    info: 'Mobile App Proposal'
  },
  {
    img: 'files/lh-cover.png',
    id: '3',
    link: '/lh',
    title: 'LimeHelmet',
    type: 'Interface Design',
    info: 'Introducing Face Detection Technology'
  },
  {
    img: 'files/gow-cover.jpg',
    id: '4',
    link: '/gow',
    title: 'Garden of Wisdom',
    type: 'Web Design',
    info: 'Web Design Proposal'
  },
  {
    img: 'files/octo-cover.png',
    id: '5',
    link: '/octo',
    title: 'Octo Sushi',
    type: 'Graphic and Web Design',
    info: 'Rebranding'
  },
  {
    img: 'files/wit-cover.png',
    id: '6',
    link: '/wit',
    title: 'Girls Who Code',
    type: 'Infographic',
    info: 'Woman In Tech Infographic'
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