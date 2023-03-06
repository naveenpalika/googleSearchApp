import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    inputSearch: '',
  }

  updateSearchInputValue = value => {
    this.setState({inputSearch: value})
  }

  onChangeInputValue = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-main-container">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image-logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeInputValue}
                value={inputSearch}
              />
            </div>
            <ul className="list-container">
              {searchResult.map(suggestion => (
                <SuggestionItem
                  key={suggestion.id}
                  suggestionDetails={suggestion}
                  updateSearchInput={this.updateSearchInputValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
