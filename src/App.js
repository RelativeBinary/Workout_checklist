import React from 'react';
import WorkoutContextProvider from './contexts/WorkoutContext';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='App'>
      <WorkoutContextProvider>
        <Navbar />
      </WorkoutContextProvider>
    </div>
  );
}

export default App;
