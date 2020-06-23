import React, { useContext } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';

const Navbar = () => {
  const { workouts } = useContext(WorkoutContext);
  return (
    <div className='navbar'>
      <h1>Workout Checklist</h1>
      <p>Currently you have {workouts.length} excercises in your checklist</p>
    </div>
  );
};

export default Navbar;
