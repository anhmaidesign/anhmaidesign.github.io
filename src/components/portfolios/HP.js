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
            <div className="portfolio-subtitle">FLIGHT MOBILE APP PROPOSAL</div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/background/hp.jpg"/>
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
              Hopper's team is based in Montreal, QC, and Cambridge, MA. Hopper is a new kind of travel company that is reinventing the way people plan to travel and books flights by leveraging the power of mobile conversation and big data in the form of trillions of flight prices. Today, Hopper is one of the fastest growing travel apps ever, with over 10 million installs since our launch in 2015.
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
              Their existing mobile site app is good but It is missing some of the basic information that is should be given immediately.
              </p>
              <p>
              A more user-friendly revision of their app will serve as a demonstration of Hopper’s excellent ticket options and care about their customers.
              </p>
            </div>
          </div>
        </div>        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              TARGET AUDIENCE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Aged 20-55
              </p>
              <p>
              Travelers
              </p>
              <p>
              Students
              </p>
              <p>
              Businessman
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              PROJECT CONCEPT
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Our goal is to design an app version including multiple features that will help either existing and potential customers who do not have much time to spend on flight shopping.
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
              Hopping Team Tasks
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
              <p>
                This mobile app will focus on purchasing flight by entering customer information. Included in the first page, the customer will enter their departure and destination, round or one-way trip, date and time of flight, and number of travelers. The second page will contain tabs to aid in the search of the flight by, price, departure times, arrival times, and the number of stops.
              </p>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/cs1.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/cs2.png"/>
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
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/ca1.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/ca2.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/ca3.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/ca4.png"/>
            </div>

            <p><b>PAGE HIERARCHY</b></p>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <p><b>Navigation Bar</b></p>
                <ul>
                  <li>
                    <p>Watch</p>
                  </li>
                  <li>
                    <p>Notification</p>
                  </li>
                  <li>
                    <p>Search</p>
                  </li>
                  <li>
                    <p>Trip</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <p><b>Flight option</b></p>
                <ul>
                  <li>
                    <p>Price</p>
                  </li>
                  <li>
                    <p>Depart</p>
                  </li>
                  <li>
                    <p>Arrive</p>
                  </li>
                  <li>
                    <p>Stop</p>
                  </li>
                  <li>
                    <p>Checked Bag</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <p><b>New User</b></p>
                <ul>
                  <li>
                    <p>Add new traveler</p>
                  </li>
                  <li>
                    <p>New User Form</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <p><b>Flight Search</b></p>
                <ul>
                  <li>
                    <p>Departure</p>
                  </li>
                  <li>
                    <p>Destination</p>
                  </li>
                  <li>
                    <p>Flight form (One way/
  Roundtrip)</p>
                  </li>
                  <li>
                    <p>Date</p>
                  </li>
                  <li>
                    <p>Traveler</p>
                  </li>
                  <li>
                    <p>Search</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <p><b>Existing User</b></p>
                <ul>
                  <li>
                    <p>Sign in</p>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <p><b>Payment</b></p>
                <ul>
                  <li>
                    <p>Add/Update Card</p>
                  </li>
                  <li>
                    <p>Card Type</p>
                  </li>
                  <li>
                    <p>Payment Summary</p>
                  </li>
                  <li>
                    <p>Submit Payment</p>
                  </li>
                  <li>
                    <p>Confirmation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              USER SCENARIO AND PATHS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/people/mia.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Mia Wilson</h3>
                <p>20, Female</p>
                <p>Student</p>
                <p>Portland, OR</p>
                <p>Mia doesn’t have a
big budget but is looking forward to studying abroad.</p>
                <p>Mia is looking for the cheapest flight to her current foreign
study program in Hyderabad, India.</p>
                <p><b>Goals:</b></p>
                <ul>
                  <li>Looking for the best deal for her student budget</li>
                  <li>To gain knowledge of the world around her to grow in
her Degree.</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/people/VP.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Vu Pham</h3>
                <p>26, Male</p>
                <p>Software Engineer</p>
                <p>Redmond, WA</p>
                <p>Vu has been working in the software engineer industry for
six years. </p>
                <p>He usually looks online and buy his flight tickets through
Hopper app for its affordable prices although the app
somtimes is a bit complicated to navigate.</p>
                <p><b>Goals:</b></p>
                <ul>
                  <li>Wants to buy a ticket more efficiently</li>
                  <li>Introducing a good flight shopping experience to
his colleagues.</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/people/grant.png"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Grant Harrison</h3>
                <p>56, Male</p>
                <p>Life Coach, Entrepreneur</p>
                <p>NewYork</p>
                <p>His beginning was a humbling one that taught him the
importance of saving your money. In continuing to live
frugal in some cases, saving a money on a plane ticket
is necessary.</p>
              
                <p><b>Goals:</b></p>
                <ul>
                  <li>Looking for an app that helps find the best plane
ticket deals.</li>
                  <li>Updated in and when tickets may go on sale, as well as
when they rise.</li>
                </ul>
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
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/us1.png"/>
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
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/hp-flow-chart1.png"/>
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
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/sketches/home-04.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/sketches/flight.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/sketches/flight2.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/sketches/payment-04.png"/>
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
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/wireframes/home.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/wireframes/home.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/wireframes/flight.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/wireframes/flight2.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/hp/wireframes/payment.png"/>
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
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/hp-flow-chart2.png"/>
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
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <p><b>Participant Qualifications</b></p>
                  <ul>
                    <li><p>College students</p></li>
                    <li><p>Existing Hopper users for updating testing and new potential customers</p></li>
                    <li><p>Shopping for flight twice a year</p></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <p><b>Tasks</b></p>
                  <ol>
                    <li><p>You are a new customer who are searching for round trip flight from SEA to CHI from Sep 2 to Sep 15</p></li>
                    <li><p>Select the cheapest flight</p></li>
                    <li><p>Choose the flight and review your trip, then adding your card to make a payment</p></li>
                  </ol>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xs-12">
                  <p><b>We asked fours users. Here are the results:</b></p>
                  <ul>
                    <li><p>Two users suggested a button that leads to the next step.</p></li>
                    <li><p>Two users didn't understand why their information wasn't entered.</p></li>
                    <li><p>Three users were confused on which area they had clicked on.</p></li>
                    <li><p>Four users were confused when the app didn't go anywhere after they had received confirmation for their order.</p></li>
                  </ul>
                  <p><b>Changes:</b></p>
                  <ul>
                    <li><p>Added a "next" button</p></li>
                    <li><p>The filled out information's icon will change to a different color.</p></li>
                    <li><p>Made "hit boxes" bigger for clicking.</p></li>
                    <li><p>On confirmation page, added a "home" button to guide them back to the beginning.</p></li>
              
                  </ul>
                </div>
              </div>
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
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/sg1.png"/>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/sg2.png"/>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Final Design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn1.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn2.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn3.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn4.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn5.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn6.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn7.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn8.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn9.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn10.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn11.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn12.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn13.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn14.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn15.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn16.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn17.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/final/fn18.png"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div style={{textAlign: 'center', marginTop: '50px', clear: 'both'}}>
                    <RaisedButton
                      label="Link To Adobe XD Prototype"
                      labelPosition="after"
                      primary={true}
                      target="_blank"
                      href={"https://xd.adobe.com/view/949de50a-4b9a-4edf-a16a-8908ee0990d9/"}
                      icon={<LinkIcon />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Introducing Duo"
              href={"/google-duo"}
              labelPosition="after"
              primary={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
            <FlatButton
              label="Download"
              labelPosition="after"
              primary={true}
              target="_blank"
              href={"files/hp/anhmai-hopper-casestudy.pdf"}
              icon={<PDF />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Garden of Wisdom"
              labelPosition="before"
              primary={true}
              href={"/gow"}
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