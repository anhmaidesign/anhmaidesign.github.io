import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Tile from './Tile';
import Modal from './Modal';

const tilesData = [
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '1',
    title: 'Project 1',
    info: 'SAM Project'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '2',
    title: 'Project 2',
    info: 'SAM Project'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '3',
    title: 'Project 3',
    info: 'SAM Project'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '4',
    title: 'Project 4',
    info: 'SAM Project'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '5',
    title: 'Project 5',
    info: 'SAM Project'
  },
  {
    img: 'https://walk-ons.com/uploads/special_images/Specials_coming_soon.jpg',
    id: '6',
    title: 'Project 6',
    info: 'SAM Project'
  },
];


class Home extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      isOpenModal: false
    }
    this.handleClickTile = this.handleClickTile.bind(this);
  }
  handleClickTile(id) {
    this.setState({
      isOpenModal: true,
      openModal: id
    })
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
          <Modal isOpen={this.state.isOpenModal}/>
      </Row>
    );
  }
}

export default Home;