'use strict';

import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <Drawer docked={false} width={350} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <Link to="/library">
            <MenuItem onTouchTap={this.handleClose}>
              <div className="valign-wrapper">
                <i className="valign medium material-icons">games</i>
                <h3 style={{display:'inline'}}>Library</h3>
              </div>
            </MenuItem>
          </Link>
          <Link to="/account">
            <MenuItem onTouchTap={this.handleClose}>
              <div className="valign-wrapper">
                <i className="valign medium material-icons">person</i>
                <h3 style={{display:'inline'}}>Account</h3>
              </div>
            </MenuItem>
          </Link>
        </Drawer>
        <nav style={{marginBottom:'2.5%'}}>
          <div className="nav-wrapper blue-grey">
            <a href="#" className="brand-logo center">games.lib</a>
            <ul id="nav-mobile" className="left">
              <li onTouchTap={this.handleToggle}><a className="waves-effect waves-light btn">Menu</a></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
