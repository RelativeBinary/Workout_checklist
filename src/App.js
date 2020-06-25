import React from 'react';
import WorkoutContextProvider from './contexts/WorkoutContext';
import WorkoutDoneModal from './components/WorkoutDoneModal';
import Navbar from './components/Navbar';
import WorkoutList from './components/WorkoutList';
import NewWorkoutForm from './components/WorkoutForm';

function App() {
  return (
    <div className='App'>
      <WorkoutContextProvider>
        <WorkoutDoneModal />
        <Navbar />
        <WorkoutList />
        <NewWorkoutForm />
      </WorkoutContextProvider>
    </div>
  );
}

export default App;
