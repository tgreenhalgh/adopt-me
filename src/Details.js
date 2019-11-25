/** @format */
import React from 'react';
import pet from '@frontendmasters/pet';

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

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
