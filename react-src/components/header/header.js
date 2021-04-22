import React, { Component } from "react";
require('./header.css');

import ProfileButton from '../profile-button/profile-button';

export default class Header extends Component {
  render() {
    return (
      <header className={['header', this.props.mix].join(' ')}>
        <a href="#/" className="header__title">Будильник на React</a>

        <ProfileButton/>
      </header>
    );
  }
}
