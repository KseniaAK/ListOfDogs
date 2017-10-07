import React, { Component } from 'react'

class BreedButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='breed-button'>
        { this.props.breedName }
      </div>
    )
  }
}

export default BreedButton