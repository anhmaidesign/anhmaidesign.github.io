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
import ModalImage from 'react-modal-image';

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

class HP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">HOPPER</div>
            <div className="portfolio-subtitle">FLIGHT MOBILE APP PROPOSAL (ACADEMIC PROJECT)</div>
          </div>
          <div className="col-xs-12">
          <ModalImage 
              className="portfolio-img-page"
              small="files/background/hp.jpg"
              large="files/background/hp.jpg"
            />
          </div>
          <div className="col-xs-12">
            <div className="full-case-button">
              
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Client
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Hopper's team is based in Montreal, QC, and Cambridge, MA. Hopper is a new kind of travel company that is reinventing the way people plan to travel and books flights by leveraging the power of mobile conversation and big data in the form of trillions of flight prices. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              PROBLEM
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Their existing mobile site app is good but It is missing some of the basic information that is should be given immediately. A more user-friendly revision of their app will serve as a demonstration of Hopper’s excellent ticket options and care about their customers.
              </p>
              
            </div>
          </div>
        </div>        
        
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              SOLUTION
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Develop an android app that is quick, easy, and secure. The re-design version will improve the lack of user experiences and allows customers to keep track on every step they make without any confusions.
              </p>
            </div>
          </div>
        </div>
        

        

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
             Team Tasks
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <p><b>ANH MAI</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>CONTENT STRATEGY</p></li>
                    <li><p>COMPETITIVE ANALYSIS</p></li>
                    <li><p>PERSONA</p></li>
                    <li><p>UI DESIGN</p></li>
                    <li><p>PAPER PROTOTYPE - FLIGHT PAGE</p></li>
                    <li><p>WIREFRAME - FLIGHT PAGE</p></li>
                    <li><p>PROTOTYPING</p></li>
                    <li><p>USABILITY TESTING</p></li>
                    <li><p>STYLE GUIDE</p></li>
                    <li><p>CASE STUDY DOCUMENTATION</p></li>
                    <li><p>LAYOUT DESIGN</p></li>
                    <li><p>UX DESIGN</p></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <p><b>ELIZABETH GANGSTAD</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>CONTENT STRATEGY</p></li>
                    <li><p>COMPETITIVE ANALYSIS</p></li>
                    <li><p>PERSONA</p></li>
                    <li><p>UI DESIGN</p></li>
                    <li><p>PAPER PROTOTYPE - HOME PAGE</p></li>
                    <li><p>WIREFRAME - HOME PAGE</p></li>
                    <li><p>PROTOTYPING</p></li>
                    <li><p>USABILITY TESTING</p></li>
                    <li><p>INTRODUCTION PARAGRAPH</p></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <p><b>CARLOS AVILA</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>CONTENT STRATEGY</p></li>
                    <li><p>USER SCENARIO</p></li>
                    <li><p>PAPER PROTOTYPE - PAYMENT PAGE</p></li>
                    <li><p>WIREFRAME - PAYMENT PAGE</p></li>
                    <li><p>USABILITY TESTING</p></li>
                    <li><p>XD PROTOTYPING</p></li>
                    <li><p>FLOW CHART</p></li>
                  </ul>
                </div>
              </div>
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
              
              <ModalImage className="portfolio-img-page" small="files/hp/cs1.png" large="files/hp/cs1.png"/>
              <ModalImage className="portfolio-img-page" small="files/hp/cs2.png" large="files/hp/cs2.png"/>
            </div>
          </div>
        </div>
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Competitive Analysis
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/ca1.png" large="files/hp/ca1.png"/>
              <ModalImage className="portfolio-img-page" small="files/hp/ca2.png" large="files/hp/ca2.png"/>
              
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
                  <img className="portfolio-img-page" src="files/hp/people/mia.jpg"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Mia Wilson,20</h3>
                  <p>Mia is looking for the cheapest flight to her current foreign
study program in Hyderabad, India.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/hp/people/VP.jpg"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Vu Pham,26</h3>
                  <p>He usually looks online and buy his flight tickets through
Hopper app for its affordable prices although the app
somtimes is a bit complicated to navigate.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/hp/people/grant.png"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Grant Harrison, 56</h3>
                  <p>His beginning was a humbling one that taught him the
importance of saving your money. In continuing to live
frugal in some cases, saving a money on a plane ticket
is necessary.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              User Scenario
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/us1.png" large="files/hp/us1.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              FLOW CHART #1
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/hp-flow-chart1.png" large="files/hp/hp-flow-chart1.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Sketches
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/hp/sketches/flight.png" large="files/hp/sketches/flight.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Wireframes
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/hp/wireframes/flight.png" large="files/hp/wireframes/flight.png"/>
              
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              FLOW CHART #2
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/hp-flow-chart2.png" large="files/hp/hp-flow-chart2.png"/>
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
           
              <h3>Tasks</h3>
              <ul>
                <li>You are a new customer who are searching for round trip flight from SEA to CHI from Sep 2 to Sep 15</li>
                <li>Select the cheapest flight</li>
                <li>Choose the flight and review your trip, then adding your card to make a payment</li>
                
              </ul>
              <h3>User Comments</h3>
              <ul>
                <li>Two users suggested a button that leads to the next step.</li>
                <li>Four users were confused when the app didn't go anywhere after they had received confirmation for their order.</li>
                
                
              </ul>
              
            </div>
          </div>
        </div>
      
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Style Guide
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/sg1.png" large="files/hp/sg1.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Final design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/hp/f1.png" large="files/hp/f1.png"/>
              
              
            </div>
          </div>
        </div>

        

        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="CRAIGSLIST"
              href={"/cl"}
              labelPosition="after"
              primary={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
            <RaisedButton
                style={{margin: '5px'}}
                label="See full design case study"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"files/hp/anhmai-hopper-casestudy.pdf"}
                icon={<LinkIcon />}
              />
              <RaisedButton
                style={{margin: '5px'}}
                label="Link To Interactive Prototype"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"https://xd.adobe.com/view/79d72545-f3d5-4ff1-5501-5adf82c4332c-0fe6/"}
                icon={<LinkIcon />}
              />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="LimeHelmet"
              labelPosition="before"
              primary={true}
              href={"/lh"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/hp"
          title="Hopper - Flight Mobile App Proposal"
          description="Anh Mai's Design Portfolio for Hopper"
          picture="http://anhmaidesign.com/files/hp-cover.jpg"/>
      </div>
    )
  }
}

export default HP;