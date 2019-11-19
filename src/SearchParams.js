/** @format */
import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  // NOTE: useEffect happens after the render is done
  useEffect(() => {
    // clear out the lists
    setBreeds([]);
    setBreed('');

    // pet. retrieves info from API
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
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
      <form>
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
    </div>
  );
};

export default SearchParams;
