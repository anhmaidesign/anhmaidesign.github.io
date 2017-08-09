import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ReactPDF from 'react-pdf/build/entry.webpack'
import $ from 'jquery';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.state = {
      scale: 1
    }
  }

  zoomIn() {
    let scale = this.state.scale;
    let pdfWidth = this.state.pdfWidth;
    this.setState({
      scale: scale * 1.15,
      pdfWidth: pdfWidth * 1.15
    });
  }

  zoomOut() {
    let scale = this.state.scale;
    let pdfWidth = this.state.pdfWidth;
    this.setState({
      scale: scale * 0.95,
      pdfWidth: pdfWidth * 0.95
    });
  }

  handleClose(e) {
    if (e.target.id == 'modal-close' || e.target.id == 'modal-container') {
      this.props.onClose();
    }
  }

  updateDimensions() {
    let windowWidth = $(window).width();

    this.setState({ pdfWidth: (windowWidth - 250) * this.state.scale });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      document.body.style.overflowY = 'auto';
    }
  }

  render() {
    let display = this.props.isOpen ? 'block' : 'none';

    let doc = [];
    for (let i = 0; i < 5; i++) {
      doc.push(<ReactPDF key={i} file="files/sam-final.pdf" pageIndex={i} width={this.state.pdfWidth}/>);
    }

    return (
      <div className="modal-container" onClick={this.handleClose} id="modal-container" style={{display: display}}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-close">
              <IconButton touch={true} onClick={this.handleClose}>
                <FontIcon className="fa fa-times" id="modal-close"/>
              </IconButton>
            </div>
          </div>
          <div className="modal-body" id="modal-body">
            {doc}
          </div>
          <div className="modal-footer">
            <IconButton touch={true}>
              <FontIcon className="fa fa-arrow-left"/>
            </IconButton>
            <IconButton touch={true} href="files/sam-final.pdf" target="_blank">
              <FontIcon className="fa fa-download"/>
            </IconButton>
            <IconButton touch={true} onClick={this.zoomIn}>
              <FontIcon className="fa fa-search-plus"/>
            </IconButton>
            <IconButton touch={true} onClick={this.zoomOut}>
              <FontIcon className="fa fa-search-minus"/>
            </IconButton>
            <IconButton touch={true}>
              <FontIcon className="fa fa-arrow-right"/>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;