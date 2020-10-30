import React, { Component } from 'react';
import { Segment, Container, Tab } from 'semantic-ui-react';
import HowToUse from './aboutTabs/HowToUse';
import Installation from './aboutTabs/Installation';
import Team from './aboutTabs/Team';

const panes = [
  {menuItem: 'Instructions', render: () => <Tab.Pane><HowToUse></HowToUse></Tab.Pane>},
  {menuItem: 'Installation', render: () => <Tab.Pane><Installation></Installation></Tab.Pane>},
  {menuItem: 'Team', render: () => <Tab.Pane><Team></Team></Tab.Pane>}
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