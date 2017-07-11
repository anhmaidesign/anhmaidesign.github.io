import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a className="active" href="/">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="/blog">
            BLOG
          </a>
        </li>
        <li>
          <a href="/about">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}