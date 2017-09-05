import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import LinkIcon from 'material-ui/svg-icons/content/link';
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

class GOW extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-title">GARDEN OF WISDOM</div>
            <div className="portfolio-subtitle">WEB APPLICATION PROPOSAL</div>
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
              Garden Of Wisdom ( GOW) is a family business based in Prescott, Arizona. Their goal is to formulate and stock unique and effective skin care products to better assist customers and their unique skin types in finding a happy while sustaining a high level of skin health.
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
              The current Garden of Wisdow website has too many unnecessary features and lack a clear message. Its navigation bar confuses customers and slows down the shopping experience. The current website lacks a coherent feel and appears to be designed by half a dozen different people. The font and color choices do not have a consistency to convey a “family handmade” feeling.
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
              Women and men with skin concerns but skews 85/15
              </p>
              <p>
              Middle classes
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
              The core user value is to make the website functional with a great design and to appeal to its most important audience which is women in their 20s. To analyze every page and bring things closer to GOW manager's sale goal.
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
              Develop and design a unique skin care website that would satisfy every customer who visits the page with just a few clicks instead of overwhelming.
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
              HTML, CSS, JavaScript, Bootstrap Framework, Paper protyping, Wireframe, Illustrator, InDesign
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 portfolio-download">
            <FlatButton
              label="Link To Final Design"
              labelPosition="after"
              primary={true}
              target="_blank"
              href={"http://anhmai-garden-of-wisdom.bitballoon.com/"}
              icon={<LinkIcon />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-group">Project Narrative</div>
            <div className="portfolio-subgroup">Client & Product</div>
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
              Garden Of Wisdom ( GOW) is a family business based in Prescott, Arizona. Their goal is to formulate and stock unique and effective skin care products to better assist customers and their unique skin types in finding a happy while sustaining a high level of skin health.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Target Audiences
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              The main target audience is women and perhaps men between the ages of 20 to 50 who are looking forward to having a healthy skin with affordable prices.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              My Task & Goal
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              Understanding that GOW is just a family business, they do not have a big budget so the current website design confuses their customers and it does not look like they sell good quality products. In addition, if a customer wants to buy skin care to treat themselves, GOW is not a good choice for them because the user interface makes them feel uncomfortable and not welcoming. That is why this website needs to be fixed to gain more customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-subgroup">Creative Brief</div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Current Problems
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              The current GOW site has too many unnecessary features and lack of a clear message. Poor navigation bar confuses customers and slows down the shopping experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Solutions
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p>
              My site content will be based on the current Garden Of Wisdom (GWO) website. I will focus on the navigation bar and shopping features that will bring to customers more special information as well as guide customer to the page they want.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Women in Tech Infographic"
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
      </div>
    )
  }
}

export default GOW;