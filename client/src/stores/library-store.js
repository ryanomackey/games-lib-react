'use strict';

import {EventEmitter} from 'events';

class LibraryStore extends EventEmitter {
  constructor() {
    super();
    this.library = [];
  }

  _getAll() {
    return this.library;
  }

  _addToLibrary(id, name, image, deck) {
    this.library.push({id:id, name:name, image:image, deck:deck});
    this.emit('change');
  }
}

const libraryStore = new LibraryStore;

export default libraryStore;
