import React, { Component } from 'react';

import SearchForm from './SearchForm';

class StarData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchType: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/')
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const searchType = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          searchType,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {
    const demon = this.state.selected
          ? <SearchForm name={this.state.selected['searchType-names']} country={this.state.selected.name}/>
          : <div className="starsearch_app__placeholder">Select a country above</div>;

    const error = this.state.error
          ? <div className="starsearch_app__error">{this.state.error}</div>
          : "";

    return (
      <div className="starsearch_app">
        {error}
        <ResultsPage />
          searchType={this.state.searchType}
          changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    );
  }
}

export default StarData;