import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  leftClickBtn = () => {
    this.setState(prevState => {
      const newIndex =
        prevState.currentIndex > 0 ? prevState.currentIndex - 1 : 0
      return {currentIndex: newIndex}
    })
  }

  rightClickBtn = () => {
    const {reviewsList} = this.props
    const listLength = reviewsList.length - 1

    this.setState(prevState => {
      const newIndex =
        prevState.currentIndex < listLength
          ? prevState.currentIndex + 1
          : prevState.currentIndex
      return {currentIndex: newIndex}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Reviews</h1>
          <img
            src={reviewsList[currentIndex].imgUrl}
            className="user-image"
            alt={reviewsList[currentIndex].username}
          />

          <div className="arrow-container">
            <button
              className="left-btn"
              onClick={this.leftClickBtn}
              type="button"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>

            <p className="user-name">{reviewsList[currentIndex].username}</p>

            <button
              className="right-btn"
              onClick={this.rightClickBtn}
              type="button"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>

          <p className="company-name">
            {reviewsList[currentIndex].companyName}
          </p>
          <p className="description">{reviewsList[currentIndex].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
