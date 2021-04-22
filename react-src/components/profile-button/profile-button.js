import React, { Component } from "react";
require('./profile-button.css');

export default class ProfileButton extends Component {
  render() {
    return (
      <a href="#/profile" className="profile-button">
        Профиль
      </a>
    );
  }
}
