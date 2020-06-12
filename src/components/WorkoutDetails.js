import React, { useContext } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'CHECK_WORKOUT', id: workout.id });
  };
  return (
    <li>
      <span onClick={handleUpdate}>
        <div>{workout.title}</div>
        <div>{workout.desc}</div>
        <div>{workout.checked ? 'true' : 'false'}</div>
      </span>
      <div onClick={() => dispatch({ type: 'REMOVE_WORKOUT', id: workout.id })}>
        REMOVE
      </div>
    </li>
  );
};

export default WorkoutDetails;
