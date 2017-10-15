import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { readUserInput } from '../actions/index'
import BreedButton from '../containers/BreedButton'
import styles from './scss/results-text'

const cx = classNames.bind(styles)

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.readUserInput(event.target.value)
  }

  render() {
    return (
      <input value={this.props.searchInput} onChange={this.handleChange} placeholder='Search breeds' />
    )
  }
}

function mapStateToProps({ searchInput }) {
  return { searchInput }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readUserInput }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)