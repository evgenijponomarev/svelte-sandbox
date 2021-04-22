import React, { Component } from "react";

import Page from './components/page/page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentPlace from './components/content-place/content-place';

import Alarms from './views/alarms/alarms';
import AlarmAdd from './views/alarm-add/alarm-add';
import AlarmEdit from './views/alarm-edit/alarm-edit';
import About from './views/about/about';
import Profile from './views/profile/profile';

const routes = [
  {
    path: /^$/,
    component: Alarms,
  },
  {
    path: /^#\/$/,
    component: Alarms,
  },
  {
    path: /^#\/alarms$/,
    component: Alarms,
  },
  {
    path: /^#\/alarm\-add$/,
    component: AlarmAdd,
  },
  {
    path: /^#\/alarms\/\d+$/,
    component: AlarmEdit,
  },
  {
    path: /^#\/about$/,
    component: About,
  },
  {
    path: /^#\/profile$/,
    component: Profile,
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentRoute: location.hash };

    window.onhashchange = () => {
      console.log('onhashchange')
      this.setState({
        currentRoute: location.hash
      });
    };
  }
  render() {
    return (
      <Page>
        <Header mix="page__header"/>

        <ContentPlace mix="page__body">
          {routes.map(route => {
            if (!route.path.test(this.state.currentRoute)) return null;

            const Tag = route.component;

            return (
              <Tag key={route.path}/>
            );
          })}
        </ContentPlace>

        <Footer mix="page__footer"/>
      </Page>
    );
  }
}

export default App;
