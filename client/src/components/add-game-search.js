import React from 'react';

export default class AddGameSearch extends React.Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <form onSubmit={this._handleSubmit}>
            <div className="input-field">
              <input id="search" type="search" ref={c => this._searchQuery = c} />
              <label htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.submitSearch(this._searchQuery.value);
  }
}
