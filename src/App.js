import React from 'react';
import AddPlace from './components/AddPlace';
import ListPlaces from './components/ListPlaces';
import { placeReducer } from './reducer';

export const PlaceContext = React.createContext({
  PlaceCheck: false
});

export default function App() {
  const placeRedux = React.useContext(PlaceContext);
  const [currentPlace, placeDispatch] = React.useReducer(placeReducer, placeRedux);

  return (
    <PlaceContext.Provider value={{ currentPlace, placeDispatch }} className="App">
      <AddPlace />
      <hr></hr>
      <ListPlaces />

    </PlaceContext.Provider>
  );
}