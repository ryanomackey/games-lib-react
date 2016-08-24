'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li>
            <div className="userView blue-grey">
              <h2 className="white-text">games.lib</h2>
            </div>
          </li>
          <li>
            <Link to="/library"><i className="material-icons">dashboard</i>Library</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
