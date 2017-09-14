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

class SS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-sm-offset-3">
            <div className="portfolio-title">THE ART INSTITUTE OF SEATTLE</div>
            <div className="portfolio-subtitle">MOTION GRAPHIC - STOP STRESS</div>
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
              The Art Institute of Seattle (AIS) in Seattle, Washington is one of The Art
Institutes, a system of more than 50 educational institutions located throughout
North America, providing education in design, media arts, fashion and culinary
arts. The Art Institutes system is a subsidiary of Education Management
Corporation (EDMC), which is headquartered in Pittsburgh, Pennsylvania.
              </p>
              <p>
              At AIS, programs are designed to provide graduates with the hands-on
experience and practical knowledge needed to seek entry-level positions in
the creative and applied arts.
              </p>
              <p>
              The annual stress relief workshop provides a good understanding of how
stress negatively affects students and help AIS students to take back control
of their life.
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
              AIS creates an annual stress relief workshop that help students connect
and share their problems. The upcoming workshop is on Oct 4, 2017 and the
“Stop Stress” motion graphic will be shown during the introduction section of
the workshop.
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
              The “Stop Stress” motion graphic will focus on raising awareness about stress
and help AIS students understand the care of the school to the students and
help their life much more manageable and happy.
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
              A motion graphic highlighting the problems
              </p>
              <p>
              Encouraging more AIS students participate in annual stress relief workshop 
              </p>
              <p>
              Content is straightforward to understand and enjoyable for viewers
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
              All students
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
              Comprehend problems to develop as well as convey the full message to the
viewers. Minimalism is the goal for this project. Furthermore, by using only
lines, shapes, striking colors and emotions to encourge more students realize
their problems.
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
              A motion graphic about two minutes with both visuals and music.
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
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/ss-storyboard1.jpeg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <img className="portfolio-img-page" src="files/ss-storyboard2.jpeg"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12">
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/T0Mgsi4FQFg" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="row portfolio-row portfolio-control">
          <div className="col-xs-12 col-sm-4 portfolio-back">
            <FlatButton
              label="Garden of Wisdom"
              href={"/gow"}
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
              href={"files/anhmai-stop-stress.pdf"}
              icon={<PDF />}
            />
          </div>
          <div className="col-xs-12 col-sm-4 portfolio-next">
            <FlatButton
              label="Flight Mobile App Proposal"
              labelPosition="before"
              href={"/hp"}
              icon={<Forward />}
            />
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/ss"
          title="The Art Institute of Seattle - Stop Stress Motion Graphic"
          description="Anh Mai's Design Portfolio for The Art Institute of Seattle"
          picture="http://anhmaidesign.com/files/ss-cover.jpg"/>
      </div>
    )
  }
}

export default SS;