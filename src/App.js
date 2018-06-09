import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

class App extends React.Component {

  render() {

    return (
      <div> 
        <Titles />
        <Form />
        <Weather />
      </div>
    );

  }

}

export default App;