import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import PageNotFound from './PageNotFound';
import Home from './Home';
import Resume from './Resume';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

import SAM from './portfolios/SAM';
import DP from './portfolios/DP';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import { Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#692C4F',
    textColor: '#692C4F'
  }
});

export default function App() {

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="logo">
              <Avatar backgroundColor={'transparent'}
                size={ 145 }
                src={'http://res.cloudinary.com/anhmaidesign/image/upload/v1502161388/Web_logo_kyeifn.png'} />
              <div id="logo-name">ANH HOAI MAI</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div id="nav-wrapper">
              <hr id="nav-line-left"/>
              <hr id="nav-line-right"/>
              <div>
                <Nav/>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/sam" component={SAM} />
          <Route exact path="/dp" component={DP} />
          <Route component={PageNotFound} />
        </Switch>
        <div className="row">
          <div className="col-xs-12">
            <Footer/>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
