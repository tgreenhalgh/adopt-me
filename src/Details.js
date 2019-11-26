/** @format */
import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

// can't use Hooks in classes

class Details extends React.Component {
  state = { loading: true };
  // constructor(props) {
  //   // `super` passes the props to parent (i.e. React.Component)
  //   super(props);

  //   this.state = {
  //     loading: true,
  //   };
  // }
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      // "this" is not changed because using => (as opposed to function)
      this.setState({
        // setState is a "shallow merge" e.g. Object.assign(oldState, newState)
        // which means what is in state stays unless overwritten
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {/* desctructure from the array, calls it `theme` */}
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/* spreads all the props */}
      {/* e.g. <Details id={props.id} /> */}
      <Details {...props} />
    </ErrorBoundary>
  );
}
