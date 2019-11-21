/** @format */
import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    // function requestPets() {
    const { animals } = await pet.animals({
      // const { animals } = pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  // NOTE: useEffect happens after the render is done
  useEffect(() => {
    // clear out the lists
    setBreeds([]);
    setBreed('');

    // pet is retrieved from API
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error); // equivalent to e => console.error(e);
  }, [animal, setBreed, setBreeds]);
  /* ^
     the array is a list of what to monitor changes in
     so when `animal` changes, useEffect fires
     }, []);  <- if you do empty array, runs first time, never again
  */

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
