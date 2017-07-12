import style from './style';
import v from './variables';

const s = Object.create(style);

s.root = {
  padding: '30px',
  height: '100%'
};

s.logo = {
  textAlign: 'center'
}

s.logoName = {
  fontSize: '18px',
  marginBottom: '15px'
}

s.navWrapper = {
  position: 'relative',
  maxWidth: '950px',
  margin: '0 auto'
}

s.nav = {
  width: '400px',
  margin: '0 auto',
  marginBottom: '50px',
}
s.navLineLeft = {
  position: "absolute",
  top: "15px",
  left: "0",
  height: "1px"
}
s.navLineRight = {
  position: "absolute",
  top: "15px",
  right: "0",
  height: "1px"
}

s.container = {
  maxWidth: '950px',
  minHeight: '550px',
  margin: '0 auto',
  position: 'relative'
}

s.footer = {
  maxWidth: '950px',
  margin: '0 auto',
  padding: '5px',
  borderTop: '1px dashed',
  marginTop: '50px',
}
export default s;
