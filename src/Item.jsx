'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class Item extends Component {
  render() {
    const item = this.props.storyItem.item;

    return (
      <div key={item.id}>
        <h1><a href={item.url}>{item.title}</a></h1>
        <h2>Score {item.score}, by {item.by.id}</h2>
        <hr />
      </div>
    );
  }
};

Item = Relay.createContainer(Item, {
  fragments: {
    storyItem: () => Relay.QL`
      fragment on HackerNewsAPI {
        item(id: 11956137) {
          id
          title
          url
          score
          by {
            id
          }
        }
      }
    `
  }
});

export default Item;
