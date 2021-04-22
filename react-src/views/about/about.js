import React, { Component } from "react";

import Title from '../../components/title/title';

export default class About extends Component {
  render() {
    return (
      <>
        <Title>О сервисе</Title>

        <p>Это просто текстовая страница с описанием сервиса.</p>
      </>
    );
  }
}
