import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import FlatButton from 'material-ui/FlatButton';
import ShareButton from '../ShareButton';
import RaisedButton from 'material-ui/RaisedButton';
import LinkIcon from 'material-ui/svg-icons/content/link';

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

class SS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">GOOGLE</div>
            <div className="portfolio-subtitle">INTRODUCING DUO (ACADEMIC PROJECT)</div>
          </div>
          <div className="col-xs-12">
            <img className="portfolio-img-page" title="Photo credit: https://wccftech.com/google-duo-integration-android/" src="files/gd/gg-background.png"/>
          </div>
          <div className="col-xs-12">
            <div className="full-case-button">
              <RaisedButton
                label="See full case study"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"files/anhmai-google-duo.pdf"}
                icon={<LinkIcon />}
              />
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
              Google LLC is an American multinational technology company that specializes in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware.
              </p>
              <p>
              Google's mission is to organize the world's information and make it universally accessible and useful.
              </p>
               <p>
              Google Duo is the new, simple video calling app that brings you face-to-face with all the people that matter most.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              PURPOSE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              The purpose is simple: why use Skype or Viber when Android already has a native app that rocks? This motion graphic will focus on introducing the new video calling platform to both Android and IOS users. 
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              CLIENT EXPECTATION
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              A motion graphic highlighting the features
              </p>
              <p>
              Increasing the installs from 500 millions in Dec 2017 to 1.2 billions in Feb 2018. 
              </p>
              <p>
              Content is straightforward to understand and enjoyable for viewers.
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
              Both Android and IOS users
              </p>
              <p>
              Aged 15-65
              </p>
              <p>
              All occupations
              </p>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              PROJECT STYLE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Comprehend features to develop as well as convey the full message to the viewers. Minimalism is the goal for this project. Furthermore, by using only lines, shapes, striking colors and emotions to transmit information honestly and closest to the viewers.
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
              A motion graphic about 30 seconds with both visuals and music.
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
              Sketches, Storyboard, After Effects, Premiere, Illustrator, Audio
              </p>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              MIND MAPPING
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/mindmapping.jpeg"/>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              BEHIND THE DESIGN
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
                <div className="col-xs-12 col-sm-6">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/behindthedesign1.jpeg"/>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <img className="portfolio-img-page" style={ {marginTop: '20px', minHeight: '612px'}} src="files/gd/behindthedesign2.jpeg"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/behindthedesign5.jpeg"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/behindthedesign4.jpeg"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/behindthedesign3.jpeg"/>
                </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              STORYBOARD
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
                <div className="col-xs-12">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/storyboard.jpeg"/>
                </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              CHARACTERS - OUTLINE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
                <div className="col-xs-12">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/character_outline.png"/>
                </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              CHARACTERS - DIGITAL SKETCHS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
                <div className="col-xs-12">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/character_sketches.png"/>
                </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              COMPONENTS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/component1.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/component2.png"/>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/component3.png"/>
                </div>
                <div className="col-xs-12 col-sm-12">
                  <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gd/component4.png"/>
                </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              FINAL VIDEO 
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="col-xs-12">
                <div className="video-wrapper">
                  <iframe width="560" height="315"
                          src="https://www.youtube.com/embed/MnsBP6JAAAw?fs=1"
                          frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
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
          
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="HOPPER"
              labelPosition="before"
              href={"/hp"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/ss"
          title="Google - Introducing Duo"
          description="Anh Mai's Design Portfolio for Google"
          picture="http://anhmaidesign.com/files/gg-cover.png"/>
      </div>
    )
  }
}

export default SS;