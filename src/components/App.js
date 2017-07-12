import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import PageNotFound from './PageNotFound';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import { Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors'
import v from '../styles/variables';
import s from '../styles/app.style';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: v.textColor,
    accent1Color: deepOrange500
  }
});

export default function App() {

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={s.root}>
        <div style={s.logo}>
          <Avatar backgroundColor={'transparent'}
            size={ 145 }
            src={'https://res.cloudinary.com/dlz9ujl2i/image/upload/v1499748764/AM_logo-02_ivz8f5.png'} />
          <div style={s.logoName}>ANH HOAI MAI</div>
        </div>
        <div style={s.navWrapper}>
          <hr style={s.navLineLeft}/>
          <hr style={s.navLineRight}/>
          <div style={s.nav}>
            <Nav/>
          </div>
        </div>
        <div style={s.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </MuiThemeProvider>
  );
}
