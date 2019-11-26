/** @format */
import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Modal from './Modal';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

// can't use Hooks in classes

class Details extends React.Component {
  state = { loading: true, showModal: false };
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
        url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url); // could also be 'redirect'

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {/* desctructure from the array, calls it `theme` */}
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
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
