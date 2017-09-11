import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} = ShareButtons;

class ShareButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="share-group">
        <LinkedinShareButton
          url={this.props.url}
          description={this.props.description}
          title={this.props.title}>
          <FlatButton
            style={{fontSize: '0.8em'}}
            label="Share"
            labelStyle={{fontSize: '1em'}}
            labelPosition="after"
            primary={true}
            icon={<FontIcon style={{fontSize: '1.5em'}} className="fa fa-linkedin" />}
          />
        </LinkedinShareButton>
        <FacebookShareButton
          url={this.props.url}
          description={this.props.description}
          title={this.props.title}
          picture={this.props.picture}>
          <FlatButton
            style={{fontSize: '0.8em'}}
            label="Share"
            labelStyle={{fontSize: '1em'}}
            labelPosition="after"
            primary={true}
            icon={<FontIcon style={{fontSize: '1.5em'}} className="fa fa-facebook" />}
          />
        </FacebookShareButton>
        <EmailShareButton
          url={this.props.url}
          body={this.props.title}
          subject={this.props.description}>
          <FlatButton
            style={{fontSize: '0.8em'}}
            label="Email"
            labelStyle={{fontSize: '1em'}}
            labelPosition="after"
            primary={true}
            icon={<FontIcon style={{fontSize: '1.5em'}} className="fa fa-envelope-o" />}
          />
        </EmailShareButton>
      </div>
    )
  }
}

export default ShareButton;