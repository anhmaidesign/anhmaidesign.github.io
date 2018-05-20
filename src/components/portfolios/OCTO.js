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
            <div className="iframe-container">
              <iframe id="octo-iframe" src="https://marvelapp.com/338hd28?emb=1" width="100%" height="500px" allowTransparency="true" frameBorder="0"/>
            </div>
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
              Project
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Rebrand existing company. Including website, color, menu, and logo.
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
              PROJECT TOOLS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Sketches, MarvelApp
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