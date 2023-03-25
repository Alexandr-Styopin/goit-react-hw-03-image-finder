import React, { Component } from 'react';

import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    formValue: '',
  };

  handleFormSubmit = searchData => {
    this.setState({ formValue: searchData });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery formValue={this.state.formValue} />
      </div>
    );
  }
}
