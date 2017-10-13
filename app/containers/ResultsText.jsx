import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { fetchAllBreeds } from '../actions/index'
import BreedButton from '../components/BreedButton'
import styles from './scss/results-text'

const cx = classNames.bind(styles)
const NUM_OF_BREEDS = 12

class ResultsText extends Component {
  componentDidMount() {
    this.props.fetchAllBreeds()
  }

  render() {
    if (this.props.textSearchResults.isFetching) {
      return (
        <div className={cx('results-text', 'loading')}>
          <div>Loading...</div>
        </div>
      )
    }

    const dogs = Object.keys(this.props.displayedBreeds).map((breed, i) => {
      return <BreedButton 
        breedName={breed} 
        isSelected={this.props.displayedBreeds[breed].isSelected} 
        key={i} 
      />
    })

    return (
      <div className={cx('results-text', 'has-data')}>
        { dogs }
      </div>
    )
  }
}

function mapStateToProps({ textSearchResults, displayedBreeds }) {
  return { textSearchResults, displayedBreeds }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllBreeds }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsText)