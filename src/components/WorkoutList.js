import React, { useContext } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';
import WorkoutDetails from './WorkoutDetails';

const WorkoutList = () => {
  const { workouts } = useContext(WorkoutContext);
  return workouts.length ? (
    <div className='workout-list'>
      <ul>
        {workouts.map((workout) => {
          return <WorkoutDetails workout={workout} key={workout.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No exercises in your list!</div>
  );
};

export default WorkoutList;
