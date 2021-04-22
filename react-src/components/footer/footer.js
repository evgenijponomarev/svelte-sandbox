import React, { Component } from "react";
require('./footer.css');

export default class Footer extends Component {
  render() {
    return (
      <footer className={['footer', this.props.mix].join(' ')}>
        <div className="footer__copyright">Будильник на Svelte {new Date().getFullYear()}</div>

        <a className="footer__about-link" href="#/about">О сервисе</a>
      </footer>
    );
  }
}
