import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './styles.scss';

class Nav extends React.Component {

  render() {
    return (
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <NavLink to="/"><Icon type="home"/>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="help">
          <NavLink to="/help"><Icon type="question"/>Help</NavLink>
        </Menu.Item>
        <Menu.Item key="learn">
          <NavLink to="/learn"><Icon type="smile-o"/><b>Code!</b></NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;