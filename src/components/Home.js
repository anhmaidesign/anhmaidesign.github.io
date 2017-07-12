import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
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
      <GridList
        cellHeight={300}
        cols={3}
        padding={30}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.id}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    );
  }
}

export default Home;