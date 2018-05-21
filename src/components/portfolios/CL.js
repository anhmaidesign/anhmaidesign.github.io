import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import LinkIcon from 'material-ui/svg-icons/content/link';
import FlatButton from 'material-ui/FlatButton';
import ShareButton from '../ShareButton';
import RaisedButton from 'material-ui/RaisedButton';
import ModalImage from 'react-modal-image'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }
};

class CL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">Craigslist</div>
            <div className="portfolio-subtitle">Mobile App Version (IN-PROGRESS ACADEMIC PROJECT)</div>
          </div>
          <div className="col-xs-12">
            <ModalImage className="portfolio-img-page" small="files/background/cl.png" large="files/background/cl.png"/>
          </div>
          <div className="col-xs-12">
            <div className="full-case-button">
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Client Overview
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <h3>Client</h3>
              <p>
                Craig Newmark (e.g., Craig) launched a free platform for classified ads in San Francisco Bay Area called Craigslist. Craigslist became a web-based service in 1996 and expanded into different classified categories.
              </p>
             
              <h3>Objective</h3>
              <p>
                The app is created to help the current Craigslist users, particularly busy users who want to save more time spend on finding classified ads. The app also intends to improve the security of customer information.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Creative brief
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <h3>About Craigslist App</h3>
              <p>
                Craigslist is an app created for the need of the current desktop users. It is designed to help local users find what they need instead of being required to have a computer anytime. The goal is to create a mobile app that eases to use for everyone without any confusion.
              </p>
              
              <h3>Problems</h3>
              <p>
                There are several 3rd parties that officially licensed by Craigslist. When using their app, a user will be asked to accept Craigslist's term and conditions to be able to use the app.
              </p>
              <p>
                However, acceptance means that their information will be shared with a 3rd party, which make user concern about security. That’s why Craigslist decides to create an official app for its users. It emphasizes that personal information of users is always a top priority.
              </p>
              <h3>Target Audiences</h3>
              <ul>
                <li>All Genders</li>
                <li>College Students</li>
                <li>Live in US</li>
                <li>Average Incomes</li>
              </ul>
              <h3>Solutions</h3>
              <p>
                Emphasizes the importance of information quality rather than focus on aesthetics. The core user value is to make the app works with a clear design layout and make it appears most specific to their primary target audiences.
              </p>
            </div>
          </div>
        </div>        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
            DEMOGRAPHIC STUDIES
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <Table style={{background: 'transparent'}}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF USERS</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      60 Million Users
                    </TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>AUDIENCE GEOGRAPHY</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <ul style={{paddingLeft: '0px'}}>
                        <li>United State: 94.9%</li>
                        <li>Canada: 1.1%</li>
                        <li>Japan: 0.6%</li>
                      </ul>
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>AUDIENCE DEMOGRAPHICS</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <ModalImage className="portfolio-img-page" style={ {margin: '20px'}} small="files/cl/cl-audiences.png" large="files/cl/cl-audiences.png"/>
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF LANGUAGE SUPPORTED</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      13 Languages
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF COUNTRIES THAT CRAIGSLIST OPERATES IN</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                    70 Countries
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF MONTHLY USER POSTINGS IN CRAIGSLIST DISCUSSION FORUM</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      200 Million Postings
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>AVERAGE NUMBER OF MONTHLY JOBS LISTINGS POSTED</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      More Than One Million
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>AVERAGE NUMBER OF CLASSIFIED ADS POSTED MONTHLY</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      80 Million Ads
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF CRAIGSLIST LOCAL SITES</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      More Than 700 Sites
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>ESTIMATED CRAIGSLIST REVENUE IN 2016</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      $690 Million
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>ESTIMATED CRAIGSLIST REVENUE IN 2015</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      $396 Million
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>NUMBER OF CRAIGSLIST EMPLOYEES</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      40 Employees
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>AVERAGE NUMBER OF MONTHLY PAGEVIEWS</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      50 Billion Payviews Per Month
                    </TableRowColumn>
                  </TableRow>

                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <b>WHERE DO VISITORS GO ON CRAIGSLIST.ORG?</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      <ul style={{paddingLeft: '0px'}}>
                        <li>accounts.craigslist.org: 10.21%</li>
                        <li>post.craigslist.org: 10.02%</li>
                        <li>sfbay.craigslist.org: 9.03%</li>
                        <li>losangeles.craigslist.org: 6.92%</li>
                        <li>craigslist.org: 6.11%</li>
                      </ul>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              CONTENT STRATEGY
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-cs-1.png" large="files/cl/cl-cs-1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-cs-2.png" large="files/cl/cl-cs-2.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-cs-3.png" large="files/cl/cl-cs-3.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              COMPETITIVE ANALYSIS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <h1>OfferUp</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-competitor1.png" large="files/cl/cl-competitor1.png"/>
              <h3>Platform</h3>
              <ul>
                <li>iOS</li>
                <li>Android</li>
              </ul>
              <h3>Price</h3>
              <ul>
                <li>Free</li>
                <li>More options in-app purchases</li>
              </ul>
              <h3>Features</h3>
              <ul>
                <li>Message buyers and sellers securely from within the app</li>
                <li>Browse items by image and sort by category or location</li>
                <li>List an item using your phone or tablet in as little as 30 seconds</li>
                <li>Know who you’re dealing with through reputation and safety features</li>
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Price highlighted</li>
                <li>Bold text</li>
                <li>Blur the image that currently view.</li>
                <li>Grid design layout</li>
              </ul>
              <h3>Cons</h3>
              <ul>
                <li>Messages is glitchy with the latest update</li>
                <li>Ads are not automatically deleted after 14 days unless the seller manually renews the ads</li>
                <li>None of user posted items appear when searching for said items.</li>
              </ul>

              <h1>Cplus</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-competitor2.png" large="files/cl/cl-competitor2.png"/>
              <h3>Platform</h3>
              <ul>
                <li>iOS</li>
                <li>Android</li>
              </ul>
              <h3>Price</h3>
              <ul>
                <li>Free</li>
                <li>Premium alert feature: $1.99</li>
                <li>Upgrade to the Pro version: $2.99</li>
              </ul>
              <h3>Features</h3>
              <ul>
                <li>Post, edit, and browse listings</li>
                <li>Search multiple cities at once</li>
                <li>Many options to show search results in a grid, map or list.</li>
                <li>Save searches that you frequently search and set up notifications for new listings.</li>
                <li>Map search for nearby listings</li>
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Multiple color theme options</li>
                <li>Large screen display</li>
                <li>Greys out listings you’ve already looked at</li>
                <li>Change theme available</li>
              </ul>
              <h3>Cons</h3>
              <ul>
                <li>Should include a hide listings button from certain posts</li>
                <li>Hard to update post</li>
                <li>It takes a long time to load in between postings.</li>
                <li>Lack of individually customize the search areas for each saved search.</li>
              </ul>

              <h1>Qwilo</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-competitor3.png" large="files/cl/cl-competitor3.png"/>
              <h3>Platform</h3>
              <ul>
                <li>iOS</li>
              </ul>
              <h3>Price</h3>
              <ul>
                <li>Free</li>
                <li>Pro Upgrade: $0.99</li>
              </ul>
              <h3>Features</h3>
              <ul>
                <li>Filter Craigslist search results; includes advanced search filters.</li>
                <li>View results in Text-only, Grid, Thumbnail and Picture layouts</li>
                <li>Run up to five alerts at one time (require Qwilo Pro)</li>
                <li>Create Craigslist alerts to be notified when a listing matches your criteria.</li>
                <li>Map view with clustering</li>
              </ul>
              <h3>Design</h3>
              <ul>
                <li>There is a handy night mode</li>
                <li>A big contact button on every listing</li>
                <li>Listing status icons (active, inactive, deleted)</li>
                <li>Full screen pictures</li>
              </ul>
              <h3>Cons</h3>
              <ul>
                <li>Limited in posts management even if upgraded to Qwilo Pro.</li>
                <li>Hard to update post</li>
                <li>Qwilo locks saved searches and notifications behind a $1 paywall (CPlus includes both for free).</li>
              </ul>

              <h1>CSmart</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-competitor4.png" large="files/cl/cl-competitor4.png" />
              <h3>Platform</h3>
              <ul>
                <li>iOS</li>
              </ul>
              <h3>Price</h3>
              <ul>
                <li>Free</li>
                <li>CSmart Pro: $2.99</li>
              </ul>
              <h3>Features</h3>
              <ul>
                <li>Automatically notifies user when a new item is found that they are searching for.</li>
                <li>Options to enable or disable: Automatic Sync, Notifications and Sounds</li>
                <li>Multi-city saved searches</li>
                <li>Integrated with Notification Center</li>
                <li>Sort results by price, date, and optionally group first by city then sort within each city.</li>
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Grey highlight for read listings</li>
                <li>Starred Listings</li>
                <li>Different cities are color coded in search results</li>
              </ul>
              <h3>Cons</h3>
              <ul>
                <li>Overall design looks a bit outdated</li>
                <li>If you leave the app, users lose their place when they come back.</li>
                <li>Sometimes the previous search information does not remove.</li>
              </ul>
              
              
              <h2>Adopt</h2>
              <ul>
                <li>Visual hierarchy</li>
                <li>Fixed navigation</li>
                <li>Suitable color scheme</li>
                <li>Photo display layout</li>
                <li>Bold and simple icons</li>
                <li>Clear button designs</li>
                <li>Organized grid layout</li>
              </ul>
              <h2>Avoid</h2>
              <ul>
                <li>Unnecessary information</li>
                <li>Extra functions</li>
                <li>Unclear description</li>
                <li>Crowded design layout</li>
                <li>Outdated design</li>
                <li>Lack of photos</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Back"
              labelPosition="after"
              disabled={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
              <RaisedButton
                label="See in-progress case study"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"files/anhmai-craigslist-app.pdf"}
                icon={<LinkIcon />}
              />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Hopper"
              labelPosition="before"
              primary={true}
              href={"/hp"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/cl"
          title="Craigslist - Mobile App Proposal"
          description="Anh Mai's Design Portfolio for Craigslist"
          picture="http://anhmaidesign.com/files/cl-cover.png"/>
      </div>
    )
  }
}

export default CL;