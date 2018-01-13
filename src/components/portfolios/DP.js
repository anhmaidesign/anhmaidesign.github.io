import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import FlatButton from 'material-ui/FlatButton';
import ShareButton from '../ShareButton';

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

class DP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12">
            <div className="portfolio-title">FIRST PLACE SCHOOL</div>
            <div className="portfolio-subtitle">STORY OF DIGITAL PRINTING (ACADEMIC PROJECT)</div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/background/dp.jpg"/>
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
              The First Place organization was established in 1989 by a small group of
educators and social workers who understood that homeless children were
not in school and decided to help them.
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
               With the development of technology, digital
printing is no longer the best technology that belongs to the future of printing.
              </p>
              <p>
              This project will give an overview of the digital printing in a way that appeals
to young people.
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
              Communication enough necessary educational information to the reader.
              </p>
              <p>
              Images and information are easy to adapt.
              </p>
              <p>
              Encourage readers explore more on article.
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
              Aged 6 to 16
              </p>
              <p>
              Students
              </p>
              <p>
              Instructors
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
              Comprehend its unique to develop as well as convey the full message to
the readers by utilizing color scheme, page layout and typography, that
effectively express the digital printing style to get the reader participate
on the subject.
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
              A landscape booklet in 7.5 x 7 inches ( 15 x 7 inches spread)
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
              Typography, InDesign, Photoshop
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-6">
            <img className="portfolio-img-page" src="files/dp0.jpg"/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <img className="portfolio-img-page" src="files/dp1.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp2.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp3.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp4.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp5.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp6.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp7.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp8.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/dp9.jpg"/>
          </div>
        </div>
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="WOMEN IN TECH INFOGRAPHIC"
              href={"/wit"}
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
              href={"files/anhmai-digital-printing-book.zip"}
              icon={<PDF />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Wayfinding posters"
              labelPosition="before"
              primary={true}
              href={"/sam"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/dp"
          title="First Place School - Story of Digital Painring"
          description="Anh Mai's Design Portfolio for First Place School"
          picture="http://anhmaidesign.com/files/dp-cover.jpg"/>
      </div>
    )
  }
}

export default DP;