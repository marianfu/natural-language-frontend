import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { title, className, disabled } = this.props;
    const classes = classNames(className, { disabled })

    return (
      <button
        className={classes}
        onClick={this.handleClick}
      >
        {title}
      </button>
    );
  }
}

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  className: 'btn'
}

export default Button;