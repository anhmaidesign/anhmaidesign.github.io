import React from 'react';

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
              EDUCATION
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    The Art Institute of Seattle
                  </div>
                  <p className="resume-subtitle">Bachelor of Fine Art (BFA), Graphic and Web Design</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>2016 - 2018</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Seattle Central College
                  </div>
                  <p className="resume-subtitle">Associate of Art (AA), Communication</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>03/2014</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-9 col-sm-9">
                  <div className="resume-title">
                    Martin College
                  </div>
                  <p className="resume-subtitle">Associate of Art (AA), Business Management</p>
                </div>
                <div className="col-xs-3 col-sm-3 portfolio-vertical-align">
                  <p>04/2012</p>
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
                  <p>User Flowchart, User Research & Usability, Typography, Interface Design, Visual Design, Information Architecture, Rapid Protyping, Wire-framing, Facilitate Service Design</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Web Design
                  </div>
                  <p>HTML & CSS, JavaScript, Bootstrap, Responsive Design, Mobile Design, Color Theory, Layout Design</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Motion Design
                  </div>
                  <p>Understanding Of Animation, Color theory, Typography</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Graphic Design
                  </div>
                  <p>Layout Design, Poster Design, Branding, Color theory, Typography, Wayfinding Design</p>
                </div>
              </div>
              <div className="row portfolio-row">
                <div className="col-xs-12 col-sm-12">
                  <div className="resume-title">
                    Tools
                  </div>
                  <p>Sketch, Invision, Illustrator, Photoshop, Sublime Text, After Effects, Animate, InDesign, Premiere Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;