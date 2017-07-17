import React from 'react';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    let active = "one";
    switch (window.location.pathname) {
      case '/':
        active = "one";
        break;
      case '/resume':
        active = "two";
        break;
      case '/contact':
        active = "three";
        break;
    }

    this.state = {
      active: active
    };
  }

  render() {
    return (
      <nav>
        <ul>
          <li id="nav-one">
            <a href="/">
              PORTFOLIO
            </a>
          </li>
          <li id="nav-two">
            <a href="/resume">
              RESUME
            </a>
          </li>
          <li id="nav-three">
            <a href="/contact">
              CONTACT
            </a>
          </li>
          <hr id="nav-hr" className={this.state.active}/>
        </ul>
      </nav>
    );
  }
}

export default Nav;