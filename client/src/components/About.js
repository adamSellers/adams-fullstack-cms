import React, { Component } from 'react';
import { Segment, Container, Tab } from 'semantic-ui-react';
import Instructions from './aboutTabs/Instructions';
import Installation from './aboutTabs/Installation';
import License from './aboutTabs/License';

const panes = [
  {menuItem: 'Instructions', render: () => <Tab.Pane><Instructions></Instructions></Tab.Pane>},
  {menuItem: 'Installation', render: () => <Tab.Pane><Installation></Installation></Tab.Pane>},
  {menuItem: 'License', render: () => <Tab.Pane><License></License></Tab.Pane>}
]

export default class About extends Component {
  render() {
    return (
      <Segment placeholder>
        <Tab panes={panes} />
      </Segment>
    )
  }
}