'use strict';

import React from 'react';
import Modal from 'react-modal';
import AddGameModal from '../components/add-game-modal.js';
import Game from '../components/game.js';
import LibraryStore from '../stores/library-store.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
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
      modalIsOpen:false,
      library: LibraryStore._getAll()
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this._getLibrary = this._getLibrary.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  closeModal() {
    this.setState({modalIsOpen:false});
  }

  componentWillMount() {
    LibraryStore.on('change', () => this._getLibrary);
  }

  componentWillUnmount() {
    LibraryStore.removeListener('change', () => this._getLibrary);
  }

  _getLibrary () {
    this.setState({
      library: LibraryStore._getAll()
    });
  }

  render() {
    const library = this._getLibrary();
    return (
      <div className="container">

        <div className="row">
          <div className="col s10">
            <h3 style={{marginTop:0}}>Library</h3>
          </div>
          <div className="col s2 right-align">
            <a className="btn-floating btn-large waves-effect waves-light teal valign" onClick={this.openModal} style={{margin:'auto'}}>
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>

        <div className="row">
          <div style={{display:'flex', flexWrap:'wrap'}}>
            {library}
          </div>
        </div>

        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} >
          <AddGameModal closeModal={this.closeModal}/>
        </Modal>

      </div>
    )
  }

  _getLibrary() {
    return this.state.library.map((game) => {
      return <Game {...game} key={game.id}/>
    })
  }
}
