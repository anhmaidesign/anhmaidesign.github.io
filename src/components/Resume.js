import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ReactPDF from 'react-pdf/build/entry.webpack'
import { Grid, Row, Col } from 'react-bootstrap';

const Resume = () => (
  <Row style={{textAlign: 'center'}}>
    <ReactPDF file="files/anhmai-resume.pdf"/>
    <div>
      <IconButton touch={true} href="files/anhmai-resume.pdf" target="_blank">
        <FontIcon className="fa fa-download"/>
      </IconButton>
    </div>
  </Row>
);

export default Resume;