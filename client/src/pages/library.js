'use strict';

import React from 'react';
import Modal from 'react-modal';
import AddGameModal from '../components/add-game-modal.js';
import Game from '../components/game.js';
import LibraryStore from '../stores/library-store.js';

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

        <div className="container-fluid">
          <div className="row">
            <div style={{display:'flex', flexWrap:'wrap'}}>
              {library}
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
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
