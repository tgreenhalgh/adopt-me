/** @format */
import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // React method take takes props and returns state
  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    // return the object to be merged into state
    return { photos };
  }

  // NOTE: an arrow function, so `this` is correct
  // in general, make all event listeners arrow functions
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              // BAD way is
              // onClick={this.handleIndexClick.bind(this, index)}
              // because bind used to be (and still is on older browsers)
              // really slow
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
