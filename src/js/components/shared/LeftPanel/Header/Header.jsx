import React from 'react';
import classNames from 'classnames';

import './Header.scss';

class Header extends React.Component {

  render() {

    const classes = classNames('header-container', this.props.className);

    return (
      <div className={classes}>
        <span className='header-title'>{this.props.title}</span>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string
};

export default Header;