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

    const dogs = []
    const breedResults = Object.keys(this.props.textSearchResults.breeds).map((breed) => breed)
    
    for (let i = 0; i < NUM_OF_BREEDS; i++) {
      // break out if there are less that 12 breeds
      if (!breedResults[i]) break
      let breed = breedResults[i].charAt(0).toUpperCase() + breedResults[i].slice(1)
      dogs.push(<BreedButton breedName={breed} key={i} />)
    }

    return (
      <div className={cx('results-text', 'has-data')}>
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