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
            <div className="portfolio-subtitle">Mobile App Version (ACADEMIC PROJECT)</div>
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
             
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Creative Brief
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              
              
              <h3>Problems</h3>
              <p>
                There are several 3rd parties that officially licensed by Craigslist. When using their app, a user will be asked to accept Craigslist's term and conditions to be able to use the app. However, acceptance means that their information will be shared with a 3rd party, which make user concern about security. 
              </p>
              
              
              
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
                      <b>AVERAGE NUMBER OF MONTHLY PAGEVIEWS</b>
                    </TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>
                      50 Billion Payviews Per Month
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
              
              <h3>Features</h3>
              <ul>
                <li>Message buyers and sellers securely from within the app</li>
                <li>Browse items by image and sort by category or location</li>
                
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Price highlighted</li>
                <li>Bold text</li>
                
              </ul>
              

              <h1>Cplus</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/cl-competitor2.png" large="files/cl/cl-competitor2.png"/>
              
              <h3>Features</h3>
              <ul>
                <li>Post, edit, and browse listings</li>
                <li>Search multiple cities at once</li>
                
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Multiple color theme options</li>
                <li>Large screen display</li>
                
              </ul>
             
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              MOODBOARD
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/moodboard.png" large="files/cl/moodboard.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              USER PERSONA
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/cl/1.jpg"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Chloe Shakin, 22</h3>
                  <p>Chloe is looking to buying a new car. She has little knowledge about cars, so she wants to know more details offered by Craigslist's seller. With a tight daily schedule, Chloe would love to use the mobile app to see all the available options before actually going out to see a car.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/cl/2.jpg"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Jonathan Howell, 42</h3>
                  <p>Jonathan wants to help his daughter to find a friendly and safe apartment in Seattle. He loves to use his mobile phone to find information before spending an extra time communicating with the poster.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/cl/3.jpg"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Rebecca Jensen, 48</h3>
                  <p>Rebecca frequently seeks for charity activities in Craigslist and encourages her students to contribute and help miserable people. She wants to contact people who have involved to see the requirements and positions are available so she can keep it for her students and her friends.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              USER FLOW
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/fc.jpg" large="files/cl/fc.jpg"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
            SKETCHES
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/s.png" large="files/cl/s.png"/>
              
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
            WIREFRAME
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/w.png" large="files/cl/w.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              USABILITY TESTING
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              
          <h4>For the usability test, I designed a scenario and six small tasks. I create a prototype of Craigslist through Sketch and Invision. The tasks will be tested on the iPhone X.</h4>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/cl/test.png" large="files/cl/test.png"/>
            
              <h3>Tasks</h3>
              <ul>
                <li>Sign up a new account and login</li>
                <li>Search for "Toyota 2018" for sale then contact a seller via email</li>
                <li>Add a "housing" category under "add to favorite" section</li>
                
              </ul>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              STYLE GUIDE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/sg1.png" large="files/cl/sg1.png"/>
              <ModalImage className="portfolio-img-page" small="files/cl/sg2.png" large="files/cl/sg2.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
            FINAL DESIGN
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/cl/f.png" large="files/cl/f.png"/>
              
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