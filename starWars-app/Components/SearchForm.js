'use strict';

import React from 'react';

import React from 'react'
import PropTypes from 'prop-types';


class SearchForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      searchTypes: {
        value: '' ,
      }
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  
  updateSearchType(searchTypes) {
    this.setState({searchTypes: {value: searchTypes});
  }
  handleSubmit(event) {
    //fetch
    event.PreventDefault();
    const { name, searchTypes} = this.state;

    console.log('Name: ', name.value);
    console.log('searchTypes:', searchTypes.value);
  }
  validateName() {
    const noteName = this.state.name.value.trim();
    if (noteName === 0) {
      return 'Name is required';
    }
  }
  getSearchTypeField=() => {
    const {searchTypes} = this.context;
    return searchTypes.map(searchType => {
      return(
        <option value={searchType.id}>{searchType.name}</option>//do the search types have ids?
      )
    })
  }
  render() {
    const searchNameError = this.ValidateName();

    return(
      <form className="new-search" onSubmit={e => this.handleSubmit(e)}>
          <h2>Your Search Begins!</h2>
          <div className="search-text">
            <p>* required field</p>
            <label htmlFor="name">Search Name *</label>
            <input
              type="text"
              className="search-text"
              name="name"
              id="name"
              onChange={e => this.updateName(e.target.value)}
              />
              {this.state.name.touched && noteNameError}
          </div>
          <div className="search-type">
          <label htmlFor="searchtype"></label>
          <select name="searchtype" id="searchtype" required>
            {this.getFolder()}
            </select>
            </div>
      </form>
    )
  }
}
//map list of folder
export default SearchForm;
//add validation to prevent note name === empty string
//render form
//form should include input for name, content and folder (folder path or folder name??--list of existing folders--dropdown list?)
//submit form to POST /notes endpoint

//handle errors

//add button to note list page to invoke form