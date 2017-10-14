import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { fetchAllBreeds } from '../actions/index'
import BreedButton from '../containers/BreedButton'
import styles from './scss/results-text'

const cx = classNames.bind(styles)

class SearchBar extends Component {
  render() {
    return (
      <input />
    )
  }
}

function mapStateToProps({}) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)