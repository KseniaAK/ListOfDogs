import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { fetchAllBreeds } from '../actions/index'
import BreedButton from '../components/BreedButton'
import styles from './scss/results-text'

const cx = classNames.bind(styles)

class ResultsText extends Component {
  componentDidMount() {
    this.props.fetchAllBreeds()
  }

  render() {
    if (this.props.textSearchResults.isFetching) {
      return (
        <div className={cx('results-text', 'loading')}>Loading...</div>
      )
    }
    const dogs = this.props.textSearchResults.breeds.map((breed, i) => {
      return <BreedButton breedName={breed} key={i} />
    })
    return (
      <div className={cx('results-text')}>
        { dogs }
      </div>
    )
  }
}

function mapStateToProps({ textSearchResults }) {
  return { textSearchResults }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllBreeds }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsText)