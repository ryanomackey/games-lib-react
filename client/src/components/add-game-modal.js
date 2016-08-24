import React from 'react';
import jQuery from 'jquery';
import AddGameSearch from './add-game-search.js';

export default class AddGameModal extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults : []
    };
  }

  render() {
    return (
      <AddGameSearch submitSearch={this._submitSearch}/>
    );
  }

  _submitSearch(searchQuery) {
    jQuery.ajax({
      method:'GET',
      url: 'http://localhost:3000/api/search?query=' + searchQuery,
      success: (results) => {
        console.log(results);
      }
    })
  }
}
