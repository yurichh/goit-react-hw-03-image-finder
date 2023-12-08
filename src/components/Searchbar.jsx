import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <header className="searchbar">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(this.state.query);
          }}
          className="search-form"
        >
          <button type="submit" className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="search-icon"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.672 16.641L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
              ></path>
            </svg>
          </button>

          <input
            className="search-input"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            required
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
