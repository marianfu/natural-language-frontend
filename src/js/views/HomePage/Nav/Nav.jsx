import React from 'react';
import classNames from 'classnames/bind';
import { Navbar, NavItem } from 'react-materialize';
import materialize from 'styles/materialize/sass/materialize.scss';
import styles from './styles.scss';

let cx = classNames.bind(materialize, styles);

export default class Nav extends React.Component {

  render() {
    console.log(materialize);
    let className = cx({
      'yellow accent-4': true,
      'blue-text text-darken-2': true,
      'nav-text': true,
    });

    return (
      <Navbar className={className} brand='Lenguaje Natural' right>
        <NavItem>Inicio</NavItem>
        <NavItem>Documentación</NavItem>
        <NavItem><b>Aprender</b></NavItem>
      </Navbar>
    );
  }
}