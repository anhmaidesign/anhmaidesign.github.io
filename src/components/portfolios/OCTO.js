import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LinkIcon from 'material-ui/svg-icons/content/link';
import ShareButton from '../ShareButton';
import $ from 'jquery';
import ModalImage from 'react-modal-image';

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

class OCTO extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">Octo Sushi</div>
            <div className="portfolio-subtitle">Rebrand Case Study (ACADEMIC PROJECT)</div>
          </div>
          <div className="col-xs-12">
            <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/background/octo.png" large="files/background/octo.png"/>
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
              Octo Sushi opened by a transplant who spent a decade sling-ing Japanese cuisine in the South Texas metro; this raw-fishery boasts two separate dining areas: a small linoleum-floored space up-front (in the old Crave space), and in-back a dizzying-ly-high-ceilinged/brick.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Objective
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Successfully represent what Octo Sushi is all about by providing a beautiful and clean design.
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
              Early 20s to late 30s. Octo Sushi aims to market to the creative, passionate individual who is willing to have fun and take a chance with their sushi experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Tone
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              The brand needs to reflect the passion and culture of Octo Sushi, meaning the colors and design will be fun, modern, and innovative.
              </p>
            </div>
          </div>
        </div>
        
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Octo Team Tasks
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <p><b>ANH MAI</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>COMPETITIVE ANALYSIS</p></li>
                    <li><p>UI DESIGN</p></li>
                    <li><p>PAPER SKETCHES</p></li>
                    <li><p>LOGO DESIGN</p></li>
                    <li><p>WIREFRAME</p></li>
                    <li><p>PROTOTYPING</p></li>
                    <li><p>USABILITY TESTING</p></li>
                    <li><p>UX DESIGN</p></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <p><b>AMELIA PARKER</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>COMPETITIVE ANALYSIS</p></li>
                    <li><p>PERSONA</p></li>
                    <li><p>LOGO DESIGN</p></li>
                    <li><p>PAPER SKETCHES</p></li>
                    <li><p>MOCK UP</p></li>
                    <li><p>CASE STUDY DOCUMENTATION</p></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <p><b>NICK MCINTOSH</b></p>
                  <ul>
                    <li><p>RESEARCH</p></li>
                    <li><p>MOODBOARD</p></li>
                    <li><p>LOGO DESIGN</p></li>
                    <li><p>PAPER SKETCHES</p></li>
                    <li><p>STYLE GUIDE</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Moodboard
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo-moodboard.png" large="files/octo-moodboard.png"/>
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
              <h4>FREMONT BOWL - Located on Fremont Ave, N. Seattle $$, Casual</h4>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Fremont1.png" large="files/octo_competitors/Fremont1.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Fremont2.png" large="files/octo_competitors/Fremont2.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Fremont3.png" large="files/octo_competitors/Fremont3.png"/>
                </div>
              </div>
              <h4>TAMURA - Located Eastlake Ave, Seattle $$$, Upscale</h4>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Tamura1.png" large="files/octo_competitors/Tamura1.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Tamura2.png" large="files/octo_competitors/Tamura2.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Tamura3.png" large="files/octo_competitors/Tamura3.png"/>
                </div>
              </div>
              <h4>WASABI - Located on 2nd Ave, Seattle $$, Modern</h4>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Wasabi1.png" large="files/octo_competitors/Wasabi1.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Wasabi2.png" large="files/octo_competitors/Wasabi2.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/octo_competitors/Wasabi3.png" large="files/octo_competitors/Wasabi3.png"/>
                </div>
              </div>
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
                  <img className="portfolio-img-page" src="files/octo/p1.png"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Forest Arikson, 27</h3>
                  <p>Forest is looking for a nice, local, affordable, and the hip joint where he can meet up with his friends for a quick bite. Forest cares a lot about experiences and enjoys aesthetically appealing locations that are fresh, inviting, and open and food that is delicious and quickly made.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/octo/p2.png"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Breah Jonas, 24</h3>
                  <p>Breah loves sushi. It is all about the journey, little moments that bring up over time creating happy memories. Breah is looking for a sushi place that still has excellent service and delicious food that doesn’t break the bank.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" src="files/octo/p3.png"/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Mia Patel, 34</h3>
                  <p>Mia has been eating sushi since she was a little girl and really appreciates restaurants that can provide authenticity of home both visually and in taste. Mia loves Octo because not only do they respect traditional Japanese’s culture but they are also fresh and trendy.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              logo Sketches
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/s1.png" large="files/octo/s1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/s2.png" large="files/octo/s2.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Vector Process Sketches
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/v1.png" large="files/octo/v1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/v2.png" large="files/octo/v2.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/v3.png" large="files/octo/v3.png"/>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Style guide - logo design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/sg2.png" large="files/octo/sg2.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              final logo design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/logo.png" large="files/octo/logo.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              website sketches
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/ws1.png" large="files/octo/ws1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/ws2.png" large="files/octo/ws2.png"/>
              
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
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/w1.png" large="files/octo/w1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/w2.png" large="files/octo/w2.png"/>
              
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
                  <p><b>Overview</b></p>
                  <p>For the usability testing, we invited six classmates to do the lo-fi
prototypes. Six participants were asked to perform two simple tasks
for the test:</p>
                  <ul>
                    <li><p>You want to find out what includes in the dinner menu and find
the way to order it through UberEat.</p></li>
                    <li><p>You want to contact the restaurant to ask for special deals and
their store location.</p></li>
                    
                  </ul>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xs-12">
                  
                  
                  <p><b>Testing results</b></p>
                  
                  <ul>
                    <li><p>One of the participants was looking for UberEat on the delivery section and was
confused between “delivery only” and “pick up only” categories. </p></li>
                    <li><p>One of the participants recommended moving the logo from the top left to the
center to get more cohesion. </p></li>
                    
              
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Style guide - web design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/sg1.png" large="files/octo/sg1.png"/>
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              final design
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/f1.png" large="files/octo/f1.png"/>
              <ModalImage className="portfolio-img-page" style={ {marginTop: '15px'}} small="files/octo/f2.png" large="files/octo/f2.png"/>
              
            </div>
          </div>
        </div>
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Interactive prototype
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="iframe-container">
                <iframe id="octo-iframe" src="https://marvelapp.com/338hd28?emb=1" width="100%" height="500px" allowTransparency="true" frameBorder="0"/>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Garden Of Wisdom"
              href={"/gow"}
              labelPosition="after"
              primary={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
          <RaisedButton
                label="See full case study"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"/files/anhmai-octo-sushi-case-study.pdf"}
                icon={<LinkIcon />}
              />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Introducing Google Duo"
              labelPosition="before"
              primary={true}
              href={"/google-duo"}
              icon={<Forward />}
            />
            
          </div>
        </div>

        <ShareButton
          url="http://anhmaidesign.com/octo"
          title="Octo Sushi - Rebranding Case Study"
          description="Anh Mai's Design Portfolio for Octo Sushi"
          picture="http://anhmaidesign.com/files/octo-cover.png"/>
      </div>
    )
  }
}

export default OCTO;