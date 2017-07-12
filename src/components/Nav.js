import React from 'react';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    let active = "one";
    switch (window.location.pathname) {
      case '/':
        active = "one";
        break;
      case '/blog':
        active = "two";
        break;
      case '/about':
        active = "three";
        break;
      case '/contact':
        active = "four";
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
          <li id="nav-portfolio">
            <a href="/">
              PORTFOLIO
            </a>
          </li>
          <li id="nav-blog">
            <a href="/blog">
              BLOG
            </a>
          </li>
          <li id="nav-about">
            <a href="/about">
              ABOUT
            </a>
          </li>
          <li id="nav-contact">
            <a href="/contact">
              CONTACT
            </a>
          </li>
          <hr className={this.state.active}/>
        </ul>
      </nav>
    );
  }
}

export default Nav;