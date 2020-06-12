import React from 'react';
import WorkoutContextProvider from './contexts/WorkoutContext';
import Navbar from './components/Navbar';
import WorkoutList from './components/WorkoutList';
function App() {
  return (
    <div className='App'>
      <WorkoutContextProvider>
        <Navbar />
        <WorkoutList />
      </WorkoutContextProvider>
    </div>
  );
}

export default App;
