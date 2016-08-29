'use strict';

import React from 'react';

export default class Game extends React.Component {
  render () {
    return(
      <div className="col s3" style={{marginLeft:'0'}}>
        <div className="card-panel" style={{padding:'2% 0 0 0'}}>
          <img style={{width:'100%'}} src={this.props.image}/>
        </div>
      </div>
    )
  }
}
