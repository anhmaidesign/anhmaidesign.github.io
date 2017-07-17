import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import s from '../styles/app.style';

const iconStyles = {
  marginRight: 5,
  width: 36,
  height: 36,
};

const Footer = () => (
  <div id="footer" style={s.footer}>
    <div id="footer-icons">
      <IconButton touch={true} style={iconStyles} href={"https://www.linkedin.com/in/anhhmai/"}>
        <FontIcon className="fa fa-linkedin"/>
      </IconButton>
      <IconButton touch={true} style={iconStyles} href={"https://www.facebook.com/anhmaidesign"}>
        <FontIcon className="fa fa-facebook"/>
      </IconButton>
      <IconButton touch={true} style={iconStyles} href={"https://www.instagram.com/maihoaianhh/"}>
        <FontIcon className="fa fa-instagram"/>
      </IconButton>
    </div>
    <p id="footer-text">Web design and content &copy; 2017 Anh Mai</p>
  </div>
);

export default Footer;