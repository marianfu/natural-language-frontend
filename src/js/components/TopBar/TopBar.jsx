import React from 'react';

class TopBar extends React.Component {

  render() {
    return (
      <div>
        <nav className="blue-grey darken-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Natural Language</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="?">Something</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;