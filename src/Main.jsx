import React from 'react';

import { Card } from './components';

import { card } from '../tests/testData';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.cardSelected = this.cardSelected.bind(this);
  }

  cardSelected(selected) {
    console.log(selected);
  }

  render() {
    return (
      <div style={{ paddingLeft: 50, paddingTop: 50 }}>
        <Card cardSelected={this.cardSelected} card={card} />
      </div>
    );
  }
}
