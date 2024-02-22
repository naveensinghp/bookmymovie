import React from 'react';

export const FavouriteColorContext = React.createContext();


function App() {
  const[
    favouriteColor,
    setFavouriteColor
  ] = React.useState('#EBDEFB');
  return(
    <>
      <FavouriteColorContext.Provider value={favouriteColor}>
      <h1>Hello World</h1>
      </FavouriteColorContext.Provider>
    </>
  );
}

export default App;
