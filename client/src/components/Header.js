import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          Home
        </div>
        <div className="item">
          About
        </div>
      </div>
    );
  }
}