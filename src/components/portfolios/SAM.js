import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import FlatButton from 'material-ui/FlatButton';

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

class SAM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-title">Seattle Art Museum</div>
            <div className="portfolio-subtitle">Wayfinding posters</div>
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
              The Seattle Art Museum (commonly known as "SAM") is an art museum located in Seattle, Washington, USA. SAM brings creative collections, powerful exhibitions and dynamic programs to provide unique educational resources to benefit the Seattle area and beyond.
              </p>
              <p>
              SAM’s vision is connecting art to life and through art, SAM improves lives and engages diverse communities.Also, help people understand its unique power to inspire creative thinking which have a good effect to our live.
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
              This project was launched to introduce the upcoming exhibit to everybody. It will be used as the wayfinding posters to introduce the collections are exhibited in the building.
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
              Three posters with different styles but convey the same message Wayfinding design should be success in guiding people Pictograms must expresses the soul and personality of the collections
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
              Tourists
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
              SOLUTION
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Applying knowledge of design principles to create well-structured paths and regions of differing visual character. Equally important, focus on exploiting the collection features but still create a harmonious layout for poster to make the audience colect the key information. A wonderfully designed place presents itself to tourists and residents alike with a kind of intuitive ease
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
              Three portrait poster in 11 x 17 inches with different styles including 12 collection pictograms for each poster
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
              Illustrator, InDesign
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-4">
            <img className="portfolio-img-page" src="files/sam1.png"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <img className="portfolio-img-page" src="files/sam2.png"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <img className="portfolio-img-page" src="files/sam3.png"/>
          </div>
        </div>
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4" style={{textAlign: 'left'}}>
            <FlatButton
              label="Back"
              labelPosition="after"
              disabled={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4" style={{textAlign: 'center'}}>
            <FlatButton
              label="Download"
              labelPosition="after"
              primary={true}
              href={"files/anhmai-SAM-posters.pdf"}
              icon={<PDF />}
            />
          </div>
          <div className="col-xs-12 col-sm-4" style={{textAlign: 'right'}}>
            <FlatButton
              label="The Story of Digital Printing"
              labelPosition="before"
              primary={true}
              href={"/dp"}
              icon={<Forward />}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SAM;