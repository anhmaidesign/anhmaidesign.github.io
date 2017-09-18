import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  floatingLabelStyle: {
    color: "#692C4F"
  },
  iconStyles: {
    width: 12,
    height: 12,
  },
  iconWrapperStyle: {
    width: 32
  },
  floatingLabelFocusStyle: {
    color: "#692C4F"
  },
  underlineFocusStyle: {
    borderColor: "#692C4F"
  }
}
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      message: ''
    }

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onFirstNameChange(event, newValue) {
    this.setState({
      firstName: newValue
    });
  }

  onLastNameChange(event, newValue) {
    this.setState({
      lastName: newValue
    });
  }

  onMessageChange(event, newValue) {
    this.setState({
      message: newValue
    });
  }

  openMail() {
    return `mailto:anhmaidesign@gmail.com?subject=Hello Anh Mai!&body=My name is ${this.state.firstName} ${this.state.lastName}. %0D%0A${this.state.message}`;
  }

  render() {
    return (
      <div id="contact-container">
        <div id="contact-title">
          DROP A LINE AND LET’S GET IN TOUCH
        </div>
        <div id="contact-body">
          <div id="contact-body-left">
            <p><i>Do you speak De’Si? ( my own term for design language if you curious).</i></p>
            <p><i>It’s ok if you don’t. I speak English too.</i></p>
            <p><strong>Email:</strong> anhmaidesign@gmail.com</p>
            <p><strong>Mobile:</strong> (206) 886-6546</p>
            <p><strong>Location:</strong> Seattle, WA</p>
            <div style={{display: 'inline-block', marginLeft: '-10px'}}>
            </div>
          </div>
          <div id="contact-body-right">
            <TextField  hintText="First Name"
                        floatingLabelText="First Name"
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
              />
            <br />
            <TextField  hintText="Last Name"
                        floatingLabelText="Last Name"
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
              />
            <br />
            <TextField  hintText="Message"
                        floatingLabelText="Message"
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        multiLine={true}
                        rows={3}
                        value={this.state.message}
                        onChange={this.onMessageChange}
              />
              <br />
             <RaisedButton label="Say Hello" primary={true} fullWidth={true} href={this.openMail()}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;