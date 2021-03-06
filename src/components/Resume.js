import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import FlatButton from 'material-ui/FlatButton';

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
              anhmaidesign@gmail.com
              <br/>
              Seattle, WA
              <br/>
              <br/>
          </div>
        </div>
        
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              EDUCATION
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="">
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    The Art Institute of Seattle
                  </div>
                  <p className="resume-subtitle">Bachelor of Fine Arts (BFA), Graphic and Web Design</p>
                  <p className="resume-subtitle">Graduating with Honors</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Jun 2018</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Seattle Central College
                  </div>
                  <p className="resume-subtitle">Associate of Arts (AA), Communication</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Mar 2014</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Martin College
                  </div>
                  <p className="resume-subtitle">Associate of Arts (AA), Business Management</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Apr 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              SKILLS
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    UX/UI Design
                  </div>
                  <p>User Flowchart, User Research & Usability, Information Architecture, Visual Design, Interaction Design, Prototyping, Wireframing, Invision, Marvel, Adobe XD, SketchApp</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Web Design
                  </div>
                  <p>HTML & CSS, Wordpress, Bootstrap, Web & Multimedia Design, Responsive Design, Mobile Design, Adobe Illustrator, Adobe Photoshop, Sublime Text, Adobe After Effects, Adobe Premiere Pro</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Graphic Design
                  </div>
                  <p>Layout Design, Poster Design, Wayfinding Design, Typography, Branding, Adobe InDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-3 portfolio-vertical-align">
            <div className="portfolio-left-col">
              EXPERIENCE
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="portfolio-right-col">
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    UX Design Intern
                  </div>
                  <div className="resume-title-x">
                    Vibrant Palette Arts Center - Seattle, WA
                  </div>
                  <p className="resume-subtitle">Implement and Redesign the current website</p>
                  <p className="resume-subtitle">Perform a set of responsive prototypes for desktop</p>
                  <p className="resume-subtitle">Gather user feedback and identify existing design problems and user-interaction challenges</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Apr 2018 - Jun 2018</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Associate Member Of Student Leadership - Seattle, WA
                  </div>
                  <div className="resume-title-x">
                    Seattle Central College
                  </div>
                  <p className="resume-subtitle">Provided outstanding Student Service</p>
                  <p className="resume-subtitle">Ensuring all information is communicated to the student correctly.</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Aug 2012 - Mar 2014</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Visual Designer
                  </div>
                  <div className="resume-title-x">
                    Martin College - Ho Chi Minh, Vietnam
                  </div>
                  <p className="resume-subtitle">Build branding projects from the ground up</p>
                  <p className="resume-subtitle">Develop campaigns and provide quality art and creative direction</p>
                  <p className="resume-subtitle">Design poster, flyers, and event tickets</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>Aug 2010 - Sep 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4" style={{textAlign: 'center'}}>
            <FlatButton
              label="Download"
              labelPosition="after"
              primary={true}
              href={"files/anhmai-resume.pdf"}
              target="_blank"
              icon={<PDF />}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;