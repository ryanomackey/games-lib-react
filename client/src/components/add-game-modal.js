'use strict';

import React from 'react';
import jQuery from 'jquery';
import AddGameSearch from './add-game-search.js';
import SearchResult from './add-game-search-result.js';

export default class AddGameModal extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults : []
    };
    this._submitSearch = this._submitSearch.bind(this);
  }

  render() {
    const searchResults = this._getSearchResults();
    return (
      <div>
        <h2 className="center-align">Search titles to add to library</h2>
        <AddGameSearch submitSearch={this._submitSearch} />
        <div className="container-fluid" style={{marginTop:'2%'}}>
          <div className="row">
            <div style={{display:'flex', flexWrap:'wrap'}}>
              {searchResults}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _submitSearch(searchQuery) {
    jQuery.ajax({
      method:'GET',
      url: 'http://localhost:3000/api/search?query=' + searchQuery,
      success: (searchResults) => {
        var searchResults = searchResults.results;
        console.log(searchResults);
        this.setState({searchResults});
      }
    });
  }

  _getSearchResults() {
    return this.state.searchResults.map( (searchResult) => {
      return <SearchResult {...searchResult} key={searchResult.id} closeModal={this.props.closeModal}/>
    });
  }

}
