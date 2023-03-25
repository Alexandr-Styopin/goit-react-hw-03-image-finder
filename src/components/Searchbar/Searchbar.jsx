import { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { inputValue: '' };

  handleSearchChange = e => {
    e.preventDefault();

    this.setState({ inputValue: e.target.value.trim() });
  };

  handleSaerchSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <SearchForm
          onSubmit={this.handleSaerchSubmit}
          onChange={this.handleSearchChange}
        />
      </header>
    );
  }
}
