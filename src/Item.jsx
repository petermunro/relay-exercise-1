'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

class Item extends Component {
  render() {
    const item = this.props.storyItem.item;

    return (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>[Exercise: Make the title clickable so that it takes you to the story's webpage]</p>
        <h2>Score [Exercise: add the article's score], by [Exercise: add the author's id here]</h2>
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
        }
      }
    `
  }
});

export default Item;
