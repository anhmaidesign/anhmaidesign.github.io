import React from 'react';
class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.data.link)
  }

  render() {
    return (
      <div className="tile" onClick={this.handleClick}>
        <img src={this.props.data.img}/>
        <div className="details">
          <span className="title">{this.props.data.title}</span>
          <span className="info">{this.props.data.info}</span>
        </div>
      </div>
    );
  }
}

export default Tile;