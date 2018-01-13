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
import WIT from './portfolios/WIT';
import GOW from './portfolios/GOW';
import SS from './portfolios/SS';
import HP from './portfolios/HP';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import { Tabs, Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import ScrollUp from 'react-scroll-up'

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
              <a href="/">
                <Avatar backgroundColor={'transparent'}
                  size={ 120 }
                  src={'http://res.cloudinary.com/anhmaidesign/image/upload/v1502161388/Web_logo_kyeifn.png'} />
                <div id="logo-name">ANH HOAI MAI</div>
              </a>
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
          <Route exact path="/google-duo" component={SS} />
          <Route exact path="/sam" component={SAM} />
          <Route exact path="/dp" component={DP} />
          <Route exact path="/wit" component={WIT} />
          <Route exact path="/gow" component={GOW} />
          <Route exact path="/hp" component={HP} />
          
          <Route component={PageNotFound} />
        </Switch>
        <div className="row">
          <div className="col-xs-12">
            <Footer/>
          </div>
        </div>
        <ScrollUp showUnder={160} style={{right: '20px'}}>
          <FloatingActionButton>
            <ArrowUpward />
          </FloatingActionButton>
        </ScrollUp>
      </div>
    </MuiThemeProvider>
  );
}
