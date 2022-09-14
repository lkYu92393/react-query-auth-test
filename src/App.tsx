import React, { useState } from 'react';
import './App.css';

import AppProvider from './provider/AppProvider';
import Landing from './Contents/Landing';

const App = () => {
  const [test, setTest] = useState("CLICK ME");

  return (
    <AppProvider>
      <Landing test={test} action={setTest} />
    </AppProvider>
  );
}

export default App;
