'use strict';

import React from 'react';
import LibraryStore from '../stores/library-store';

export default class SearchResult extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.image) {
      var image_url = 'http' + this.props.image.small_url.substr(5);
    } else {
      image_url = undefined;
    }
    return (
      <div className="col s4" style={{marginLeft:'0'}}>
        <div className="card">
          <div className="card-image teal">
            <img alt={this.props.name} src={image_url} />
          </div>
          <div className="card-content">
            <p>{this.props.deck}</p>
          </div>
          <div className="card-action">
            <a href="#" onClick={() => {
              this.props.closeModal();
              LibraryStore._addToLibrary(this.props.id, this.props.name, image_url, this.props.deck)
            }
          }>Add to library</a>
          </div>
        </div>
      </div>
    )
  }
}
