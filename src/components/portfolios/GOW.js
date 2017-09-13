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
              <p><b>My Client</b></p>
              <p>
              Garden Of Wisdom (GOW) is a family business based in Prescott, Arizona. Their goal is to formulate and stock unique and effective skin care products to better assist customers and their unique skin types in finding a happy while sustaining a high level of skin health.
              </p>
              <p><b>Target Audiences</b></p>
              <p>
              The main target audience is women and perhaps men between the ages of 20 to 50 who are looking forward to having a healthy skin with affordable prices.
              </p>
              <p><b>My Task & Goal</b></p>
              <p>
              Understanding that GOW is just a family business, they do not have a big budget so the current website design confuses their customers and it does not look like they sell good quality products. In addition, if a customer wants to buy skin care to treat themselves, GOW is not a good choice for them because the user interface makes them feel uncomfortable and not welcoming. That is why this website needs to be fixed to gain more customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Creative Brief
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p><b>Current Problems</b></p>
              <p>
              The current GOW site has too many unnecessary features and lack of a clear message. Poor navigation bar confuses customers and slows down the shopping experience.
              </p>
              <p><b>Solutions</b></p>
              <p>My site content will be based on the current Garden Of Wisdom (GWO) website. I will focus on the navigation bar and shopping features that will bring to customers more special information as well as guide customer to the page they want.</p>
              <p><b>Measure Success</b></p>
              <p>
              The success of this site will be measured based on following criteria:
              </p>
              <p>
              <b>Profit:</b> The difference between the cost spent to re-design the site and the revenue after finishing
              </p>
              <p>
              <b>Timing:</b> By enter to the site, users will have their products right away without wasting time.
              </p>
              <p>
              <b>Quality:</b> After throughout testing and quality assurance, I will evaluate whether the main target was achieved in following terms: Is the new site difficult to use? Are they satisfy with the site?
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
              <Table style={{background: 'transparent'}}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn><b>FACTOR</b></TableHeaderColumn>
                    <TableHeaderColumn><b>GARDEN OF WISDOM</b></TableHeaderColumn>
                    <TableHeaderColumn><b>SEPHORA</b></TableHeaderColumn>
                    <TableHeaderColumn><b>KIARA PHITOCEUTICALS</b></TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Product</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Skincare, especially oils</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Everything about beauty products</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Skincare, especially facial oils</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Price</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>$5 - $35 depending on the size</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>$20 and up</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>$25 and up</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Quality</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>100% pure essential oils</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>High quality products</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>High quality products</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Strength</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Familly business so they mainly focus on quality with affordable prices</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Big company so they have more brand options with the best customer services</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Top oil brand</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Weakness</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>No stores, online shopping only with a few choice of products</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>High prices with many brands lead to difficulty selection</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Only available in Australia</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Apperance</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Simple packaging with no brand identity</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Colorful looking</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Only black and white</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Advertising</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>No marketing plan</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Social media advertsing with email subscribes</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Email subscribes</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              User Persona
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/people/sarah.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Sarah Greet</h3>
                <p>30, Female</p>
                <p>Teacher</p>
                <p>Britain</p>
                <p>Sarah is an English teacher who always stays in the office because of the nature of her work. She lives with her cat named Lila and in her free time, she usually spends the time to travel around the world to explore different cultures and cuisines.</p>
                <p>She has been shopping several different skin care brands to find the best skin care routine for her dry skin. She loves GOW products because of its quality and prices. Also, she does not care much about product ingredients, but she would like to have a better shopping experience at GOW website.</p>
                <p><b>Current Frustrations:</b></p>
                <ul>
                  <li>The navigation bar is difficult to use when shopping</li>
                  <li>Overwhelming information on the website</li>
                </ul>
                <p><b>User Needs:</b></p>
                <ul>
                  <li>Navigation bar structure is simple and easy to navigate</li>
                  <li>Promotion information displays more clearly</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/people/alen.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Alen Smith</h3>
                <p>23, Male</p>
                <p>Dancer</p>
                <p>Redmond, WA</p>
                <p>Alen has been working as a freelance dancer since he was in secondary school. He does not like working for others, so most of the time he does what he wants. He has a youtube channel where he posts his dancing tutorials and his travel diary.</p>
                <p>He compares himself as the free bird. He has shopped at GOW several times in the past but he stopped it because he had he has many bad experience when shopping at GOW website.</p>
                <p><b>Current Frustrations:</b></p>
                <ul>
                  <li>Information is fragmented and difficult to control</li>
                  <li>Lack of images and product description</li>
                </ul>
                <p><b>User Needs:</b></p>
                <ul>
                  <li>A nice and clean website layout helps to find product easier</li>
                  <li>More functions to support purchase</li>
                  <li>More featured products</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/people/tran.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Tran Pham</h3>
                <p>23, Female</p>
                <p>Student</p>
                <p>Vietnam</p>
                <p>Tran is an international student who is studying at Seattle Central College. She loves cooking, hiking, dancing and traveling with her friends.</p>
                <p>GOW is one of her favorite places to buy skin care products even though her shopping experience was not always good. She called herself as a hard person, always looking for the best effective and affordable products for her combination skin.</p>
                <p><b>Current Frustrations:</b></p>
                <ul>
                  <li>Too many steps to navigate to the product page</li>
                  <li>Lack of promotion information</li>
                  <li>Poor navigation barand details are not streamlined</li>
                </ul>
                <p><b>User Needs:</b></p>
                <ul>
                  <li>More product images with prices</li>
                  <li>Less crowded navigation bar</li>
                  <li>Shipping options more stand out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              Logic Flow
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <p><i>The flow chart is a means to visually present the flow of data throughout the new GOW layout.</i></p>
              <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/gow_flow_chart.png"/>
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
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch1.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch2.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch3.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch4.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch5.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch6.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch7.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_sketches/Sketch8.jpg"/>
              </div>
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
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/1.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/2.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/3.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/4.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/5.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/6.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/7.png"/>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img className="portfolio-img-page" style={ {marginTop: '15px'}} src="files/gow_wireframe/8.png"/>
              </div>
              <div className="col-xs-12">
                <div style={{textAlign: 'center', marginTop: '50px', clear: 'both'}}>
                  <RaisedButton
                    label="Link To Final Design"
                    labelPosition="after"
                    primary={true}
                    target="_blank"
                    href={"http://anhmai-garden-of-wisdom.bitballoon.com/"}
                    icon={<LinkIcon />}
                  />
                </div>
              </div>
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
              label="Stop Stress Motion Graphic"
              labelPosition="before"
              href={"/ss"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/gow"
          title="Garden of Wisdom - Web Application Proposal"
          description="Anh Mai's Design Portfolio for Garden of Wisdom"
          picture="http://anhmaidesign.com/files/gow-cover.jpg"/>
      </div>
    )
  }
}

export default GOW;