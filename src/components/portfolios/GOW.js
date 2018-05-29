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
          <div className="col-xs-12">
            <div className="portfolio-title">GARDEN OF WISDOM</div>
            <div className="portfolio-subtitle">WEB APPLICATION PROPOSAL</div>
          </div>
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/background/gow.jpg"/>
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
              The current Garden of Wisdow website has too many unnecessary features and lack a clear message. Its navigation bar confuses customers and slows down the shopping experience.
              </p>
               <p>
              It lacks a coherent feel and appears to be designed by 
half a dozen different people. The font and color choices do not have a 
consistency to convey a “family handmade” feeling. 
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
              My site content will be based on the current Garden Of Wisdom (GWO) website. I will focus on the navigation bar and shopping features that will bring to customers more special information as well as guide customer to the page they want.

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
                    <TableRowColumn style={{whiteSpace: 'initial'}}>affordable prices</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}> good customer services</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Top oil brand</TableRowColumn>
                  </TableRow>
                  <TableRow striped={false}>
                    <TableRowColumn style={{whiteSpace: 'initial'}}><b>Weakness</b></TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Limited products</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>High prices</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'initial'}}>Only available in Australia</TableRowColumn>
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
                <h3>Sarah Greet, 30</h3>
                
                <p>She loves GOW products because of its quality and prices but she would like to have a better shopping experience at GOW website.</p>
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
                <h3>Alen Smith, 23</h3>
                
                <p>He has shopped at GOW several times in the past but he stopped it because he had he has many bad experience when shopping at GOW website.</p>
                <p><b>Current Frustrations:</b></p>
                <ul>
                  <li>Information is fragmented and difficult to control</li>
                  <li>Lack of images and product description</li>
                </ul>
                <p><b>User Needs:</b></p>
                <ul>
                  <li>A nice and clean website layout helps to find product easier</li>
                  <li>More functions to support purchase</li>
                  
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <img className="portfolio-img-page" style={ {marginTop: '20px'}} src="files/people/tran.jpg"/>
              </div>
              <div className="col-xs-12 col-sm-8">
                <h3>Amelia Parker, 23</h3>
                
                <p>GOW is one of her favorite places to buy skin care products even though her shopping experience was not always good.</p>
                <p><b>Current Frustrations:</b></p>
                <ul>
                  <li>Too many steps to navigate to the product page</li>
                
                  <li>Poor navigation barand details are not streamlined</li>
                </ul>
                <p><b>User Needs:</b></p>
                <ul>
                  <li>More product images with prices</li>
                  <li>Less crowded navigation bar</li>
                  
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
              
            </div>
          </div>
        </div>
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="BACK"
              href={"/lh"}
              labelPosition="after"
              primary={true}
              icon={<Back />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-download">
            <RaisedButton
                style={{margin: '5px'}}
                label="See full case study"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"/files/anhmai-garden-of-wisdom.pdf"}
                icon={<LinkIcon />}
              />
              <RaisedButton
                style={{margin: '5px'}}
                label="Link To Final Design"
                labelPosition="after"
                primary={true}
                target="_blank"
                href={"http://anhmai-garden-of-wisdom.bitballoon.com/"}
                icon={<LinkIcon />}
              />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="NEXT"
              labelPosition="before"
              href={"/octo"}
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