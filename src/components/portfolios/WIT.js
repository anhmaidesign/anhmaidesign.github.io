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

class WIT extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">GIRLS WHO CODE</div>
            <div className="portfolio-subtitle">WOMEN IN TECH INFOGRAPHIC</div>
          </div>
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/background/wit.jpg"/>
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
              Girls Who Code (GWC) was founded by Reshma Saujani in 2012 who came up
with the idea of creating the organization during her run for the United States
Congress.
              </p>
              
              <p>
              The summer programs provide free seven weeks for current 10th - 11th grade
girls to learn coding and get exposure to tech jobs.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              BACKGROUND
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              The Puget Sound Community school will give out 2018 summer program
folders that include several different pieces of information for returning
students and new students. This flyer will be included in this folder.
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
              The purpose of this project is to promote summer programs to high school
girls to learn coding and get exposure to tech jobs.
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
              High school students
              </p>
              <p>
              Undergraduate students
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              STRATEGIES
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Show information visually with graphs, charts and icons
              </p>
              <p>
              Simplified layout to present information clearly
              </p>
              <p>
              Information is factual and reliable, current and helpful.
              </p>
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
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/wit-s.png" large="files/wit-s.png"/>
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
              <ModalImage className="portfolio-img-page" style={ {marginTop: '20px'}} small="files/wit-f.png" large="files/wit-f.png"/>
            </div>
          </div>
        </div>

        
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Back"
              href={"/octo"}
              labelPosition="after"
              primary={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
          <RaisedButton
                label="See actual infographic size"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"files/anhmai_womenintech_infographic.pdf"}
                icon={<LinkIcon />}
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
          url="http://anhmaidesign.com/wit"
          title="Girls Who Code - Woman in tech Infographic"
          description="Anh Mai's Design Portfolio for Girls Who Code"
          picture="http://anhmaidesign.com/files/wit-cover.jpg"/>
      </div>
    )
  }
}

export default WIT;