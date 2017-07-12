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

s.nav = {
  width: '350px',
  margin: '0 auto'
}

export default s;
