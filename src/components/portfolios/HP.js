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
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-title">HOPPER</div>
            <div className="portfolio-subtitle">FLIGHT MOBILE APP PROPOSAL</div>
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
              <p>
              Their mission is providing travelers with the information they need to get the best deals on flights. No spam. No ads. No popups. No time wasted. Just the confidence that you're booking smart and saving money.
              </p>
              <p>
              Hopper flight app is a mobile application that uses big data to predict and analyze airfare. Hopper let you book flights direct from your phone and there are no hidden fees.
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
              PROJECT TOOL
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Storyboarding, Paper protyping, Wireframe, Adobe XD, Illustrator, InDesign
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-subtitle">Project Narrative</div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Client & Product
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p><b>Who is our client?</b></p>
              <p>
              Hopper is based in Montreal, QC, and Cambridge, MA. Hopper is a new kind of travel company that is reinventing the way people plan to travel and books flights by leveraging the power of mobile conversation and big data in the form of trillions of flight prices.
              </p>
              <p>
              Today, Hopper is one of the fastest growing travel apps ever, with over 10 million installs since our launch in 2015.
              </p>
              <p><b>Why did we choose Hopper?</b></p>
              <p>
              Their existing mobile site app is good but it is missing some of the basic information that is should be given immediately.
              </p>
              <p>
              A more user-friendly revision of their app will serve as a demonstration of Hopper’s excellent ticket options and care about their customers.
              </p>
              <p><b>What type of mobile experience?</b></p>
              <p>
              We decided to design around Android's capabilities and conventions to give users the best experience.
              </p>
              <p>
              Our team decided to improve some features that will help their customers access the app anywhere and anytime.
              </p>
              <p>
              Having this app re-design would not only allow customers search for the future flight, it also allows customers to keep track on every step they make without any confusion.
              </p>
              <p><b>Our Task and Goals</b></p>
              <p>
              Our goal is to design an app version including multiple features that will help either existing and potential customer who are not have much time to spend on flight shopping.
              </p>
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
              Proposed Mobile Approach
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
                Hopper app has plenty of potential to develop as
well as improving interoperability with customers.
Due to the customer feedback we collected, we
realize there are many functions that need to be
changed as well as a few that can be kept.
              </p>
              <p>
              For instance, simplifying the “call to action” button
and flight information would be a good idea to
improve the app and removing the cluttered
financial information makes the customer less
confused.
              </p>
              <p>
              We would like to simplify how new customers find
information about the flights by adding different
tabs, such as searching by price, departure time,
destination time, and the number of stops a flight
will have.
              </p>
              <p>
              Since a successful user experience is our goal, we
will focus on helping loyal customers look for flight
information or review their information before
obtaining the final results.
              </p>
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
              <p><b>FEATURES TO ADOPT</b></p>
              <ul>
              <li>
              <p><b>Icon Hierarchy:</b> To adapt from text to icons buttons will draw the
user in with a cleaner and easier the look.</p>
              </li>
              <li>
              <p><b>Multiflight result:</b> Incorporating tabs to make searching easier
based on the user's need, such as by lowest price,
time, and whether the flight is non-stop.</p>
              </li>
              <li>
              <p><b>Review pages:</b> To have user fully understand what they are
purchasing before buying to prevent future issues.</p>
              </li>
              <li>
              <p><b>Highlight color:</b> Highlighting the color of tabs, or icon in use will
make the user understand where they are in the
app making usability easier</p>
              </li>
              <li>
              <p><b>Call to action button:</b> Enhance the look of the button and interface to
get the user to understand what the next step is
going to be.</p>
              </li>
              <li>
              <p><b>Simple navigation bar:</b> Cleaner navigation bar for the user to be aware of
where they are in the app.</p>
              </li>
              </ul>

              <p><b>FEATURES TO AVOID</b></p>
              <ul>
              <li>
              <p><b>Long description:</b> Long descriptions in small areas cause confusion
and lead to errors and frustration with the user.</p>
              </li>
              <li>
              <p><b>Contrasting Background color:</b> The background needs to compliment the icons and
features we will highlight.</p>
              </li>
              <li>
              <p><b>Complex filters system: </b> Too much information compiled into a small area
without proper padding will overwhelm the user.</p>
              </li>
              </ul>
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
                <p>Miastudies Asian and Middle Eastern Studies at
Dartmouth College. Being a student, Mia doesn’t have a
big budget but is looking forward to studying abroad.</p>
                <p>Mia is looking for the cheapest flight to her current foreign
study program in Hyderabad, India. While shopping around
online and the best app, she came across Hopper and
found the best and cheapest deal.</p>
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
six years. As a key member of a team, Vu is responsible
for attending the company conferences in various places
and go on for a business trip to build a teamwork with
his colleagues.</p>
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
                  <li>Looking for an app that helps fi nd the best plane
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
      {/*
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              USABILITY TESTING
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/hp/hp-flow-chart2.png"/>
            </div>
          </div>
        </div>
      */}
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Stop Stress Motion Graphic"
              href={"/ss"}
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
              href={"files/anhmai-garden-of-wisdom.pdf"}
              icon={<PDF />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Up Next"
              labelPosition="before"
              disabled={true}
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