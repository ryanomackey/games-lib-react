'use strict';

import React from 'react';
import Modal from 'react-modal';
import AddGameModal from '../components/add-game-modal.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '59%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '60%',
    height: '85%'
  }
};

export default class LibraryPage extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen:false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  closeModal() {
    this.setState({modalIsOpen:false});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s11">
            <h1 className="center-align">Library</h1>
          </div>
          <div className="col s1 valign-wrapper" style={{height:'125.69px'}}>
            <a className="btn-floating btn-large waves-effect waves-light teal valign" onClick={this.openModal} style={{margin:'auto'}}>
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <AddGameModal/>
        </Modal>
      </div>
    )
  }
}
