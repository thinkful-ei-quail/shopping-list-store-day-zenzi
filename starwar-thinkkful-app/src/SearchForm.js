import React from 'react';

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
      value: ['Planets', 'Spaceships', 'Vehicles', 'People', 'Films' ,'Species']
      }
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  
  updateSearchType(searchTypes) {
    this.setState({searchTypes: {value: searchTypes}});
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
              {this.state.name.touched && searchNameError}
          </div>
          <div className="search-type">
          <label for="type-of-search">Select a Search Type:</label>
              <select name="type-of-search" id="type-of-search" required>
                <option value="People">People</option>
                <option value="Planet">Planet</option>
                <option value="Spaceship">Film</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Species">Species</option>
                <option value="Film">Film</option>

              </select>
            </div>
      </form>
    )
  }
}

export default SearchForm;

//render form
//form should include input for name, content and folder (folder path or folder name??--list of existing folders--dropdown list?)


//handle errors

//add button to note list page to invoke form