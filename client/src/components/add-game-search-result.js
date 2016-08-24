'use strict';

import React from 'react';

export default class SearchResult extends React.Component {
  render() {
    return (
      <div className="col s4">
        <div className="card" style={{height:'600px'}}>
          <div className="card-image teal">
            <img style={{width:'100%',height:'300px'}} src={this.props.image.medium_url} />
            <span className="card-title">{this.props.name}</span>
          </div>
          <div className="card-content" style={{height:'225px'}}>
            <p>{this.props.deck}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    )
  }
}
