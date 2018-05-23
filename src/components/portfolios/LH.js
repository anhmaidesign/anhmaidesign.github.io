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

class LH extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">LimeHelmet</div>
            <div className="portfolio-subtitle">Introducing face detection technology (ACADEMIC PROJECT)</div>
          </div>
          <div className="col-xs-12">
            <ModalImage className="portfolio-img-page" small="files/background/lh.png" large="files/background/lh.png"/>
          </div>
          <div className="col-xs-12">
            <div className="full-case-button">
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              CREATIVE BRIEF
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <h3>Client</h3>
              <p>
                LimeBike is a bicycle-sharing company launched in June 2017 based in San Mateo, California. It operates dockless bicycle-sharing systems in several cities and college campuses across the United States.
              </p>
              <h3>Purpose</h3>
              <p>
                For the bike helmet to protect you, it needs to fit accurately. By using the face detection technology, the kiosk will be able to measure biker's head within seconds. It will take the biker's head measurements then give the appropriate helmet size for them.
              </p>
              <h3>Solutions</h3>
              <p>
                Develop the kiosk that is simple and easy to use. LimeHelmet will provide a rental helmet kiosk for LimeBike users. An automated vending machine that will dispense helmets for a small fee will also apart of the project.
              </p>
             
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
              <h1>HelmetHub</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/lime-helmet/hh1.jpg" large="files/lime-helmet/hh1.jpg"/>

              
              <h3>Features</h3>
              <ul>
                <li>Real-time analytics</li>
              
                <li>Touch screen system to help deploy the safety gear</li>
                
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Simple color scheme</li>
                  
                    <li>Large screen display</li>
                
              </ul>
              

              <h1>MelBourneBikeShares</h1>
              
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/lime-helmet/Mel1.jpg" large="files/lime-helmet/Mel1.jpg"/>
              
              <h3>Features</h3>
              <ul>
                <li>User manual</li>
                <li>Payment instruction</li>
                
              </ul>
              <h3>Design</h3>
              <ul>
                <li>Bright color scheme</li>
                    
                <li>Large screen display</li>
                
              </ul>
           
            </div>
          </div>
        </div>
    
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              INSPIRATIONS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/moodboard.png" large="files/lime-helmet/moodboard.png"/>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              KIOSK DIMENSIONS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h3>Touch screen kiosks including all of the following:</h3>
                  <ul>
                    <li><b>Touch Screen Kiosk Monitor Sizes:</b> 42 inches</li>
                    <li><b>Aspect Ratio:</b> 16:09</li>
                    <li><b>Dimensions:</b> 38.39" x 22.63" x 3.46"</li>
                    <li><b>Active Area:</b> 36.53" x 20.55"</li>
                    <li><b>Resolution:</b> 1920x1080</li>
                    <li><b>Touch Glass:</b> 4mm</li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6">
                <ModalImage className="portfolio-img-page" small="files/lime-helmet/template.png" large="files/lime-helmet/template.png"/>
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
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/flow.png" large="files/lime-helmet/flow.png"/>
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
              
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/sk3.png" large="files/lime-helmet/sk3.png"/>
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
              
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/wf2.png" large="files/lime-helmet/wf2.png"/>
              
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
                
                
                <div className="col-xs-12">
                  <h3>Tasks</h3>
                  <ul>
                    <li><b>You are a new user who is bike with LimeBike and going to rent a helmet in the LimeHelmet kiosk:</b><br/> You want to know how to use LimeHelmet.</li>
                    <li><b>Choose the helmet size that suits you best:</b> <br/>Follow the direction when measuring your head</li>
                    <li><b>Review your rental:</b> <br/>You want to rent your helmet for 30 mins</li>
                    <li><b>Payment:</b> <br/>Pay with your saved card</li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h3>I tested six users. Here are the paper testing results:</h3>
                  <ul>
                    <li>All of them suggested removing the ”measure your hat size” section since LimeHelmet already gives a measurement.</li>
                    <li>The colors are very consistent and associated with LimeBike brand</li>
                    <li>The user flow was smooth and simple</li>
                    
                  </ul>
                  <h3>Changes</h3>
                  <ul>
                    <li>Add some missing features as suggested by the usability test.</li>
                    
                  
                    <li>Other details as suggested by usability testing.</li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <ModalImage className="portfolio-img-page" small="files/lime-helmet/testing.jpg" large="files/lime-helmet/testing.jpg"/>
                </div>
              </div>
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
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/sg1.png" large="files/lime-helmet/sg1.png"/>
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/sg2.png" large="files/lime-helmet/sg2.png"/>
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
              <ModalImage className="portfolio-img-page" small="files/lime-helmet/f1.png" large="files/lime-helmet/f1.png"/>
              
            </div>
          </div>
        </div>

        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="HOPPER"
              href={"/hp"}
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
                href={"files/anhmai-lime-helmet.pdf"}
                icon={<LinkIcon />}
              />
              <RaisedButton
                style={{margin: '5px'}}
                label="Link To Interactive Prototype"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"https://xd.adobe.com/view/713055ed-074a-4431-7173-a3ba4983ce83-0701/"}
                icon={<LinkIcon />}
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
          url="http://anhmaidesign.com/lh"
          title="Craigslist - Mobile App Proposal"
          description="Anh Mai's Design Portfolio for LimeHelmet"
          picture="http://anhmaidesign.com/files/lh-cover.png"/>
      </div>
    )
  }
}

export default LH;