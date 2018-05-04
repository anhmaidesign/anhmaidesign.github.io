import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 5,
  width: 36,
  height: 36,
};

const Footer = () => (
  <footer id="footer">
    <div id="footer-icons">
      <IconButton touch={true} style={iconStyles} target="_blank" href={"https://www.linkedin.com/in/anhhmai/"}>
        <FontIcon className="fa fa-linkedin"/>
      </IconButton>
      <IconButton touch={true} style={iconStyles} target="_blank" href={"https://www.behance.net/anhmaidesign/"}>
        <FontIcon className="fa fa-behance"/>
      </IconButton>
    </div>
    <p id="footer-text">Web design and content &copy; 2018 Anh Mai</p>
  </footer>
);

export default Footer;