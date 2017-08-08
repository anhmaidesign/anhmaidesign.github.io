import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className="modal-container">
          <div className="modal-content">
            <h1>Project</h1>
          </div>
        </div>
      );
    }
    else {
      return (<span></span>);
    }
  }
}

export default Modal;