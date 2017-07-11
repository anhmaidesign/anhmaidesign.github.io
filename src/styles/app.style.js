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
  fontSize: '20px',
  marginLeft: '10px',
  marginTop: '10px'
}

s.nav = {
  width: '350px',
  margin: '0 auto'
}

export default s;
