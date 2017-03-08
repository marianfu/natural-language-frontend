import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnCliCk = this.handleOnCliCk.bind(this);
  }

  handleOnCliCk() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { color, disabled } = this.props;
    const style = `waves-effect waves-light btn ${color || ''} ${disabled && 'disabled'}`
    
    return (
      <button
        className={style}
        onClick={this.handleOnCliCk}
      >
        {this.props.title}
      </button>
    );
  }
}

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  color: React.PropTypes.string,
  onClick: React.PropTypes.func
}

Button.defaultProps = {
  disabled: false
}

export default Button;