'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Item from './Item';


class HackerNewsRoute extends Relay.Route {
  static routeName = 'HackerNewsRoute';
  static queries = {
    storyItem: (Component => {
      return Relay.QL`
        query root {
          hn {
              [Exercise: add child component's fragment here]
          }
        }
    `})
  };
}

export default HackerNewsRoute;
