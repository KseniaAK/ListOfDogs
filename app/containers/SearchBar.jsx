import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { handleUserSearch } from '../actions/index'
import BreedButton from '../containers/BreedButton'
import styles from './scss/search-bar'

const cx = classNames.bind(styles)

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.handleUserSearch(event.target.value)
  }

  render() {
    return (
      <input 
        className={cx('search-bar')} 
        value={this.props.searchInput} 
        onChange={this.handleChange} 
        placeholder='Search breeds' 
      />
    )
  }
}

function mapStateToProps({ searchInput }) {
  return { searchInput }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleUserSearch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)