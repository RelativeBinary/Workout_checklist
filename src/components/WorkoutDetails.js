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
      <span>
        <div className='title'>{workout.title}</div>
        <div className='desc'>{workout.desc}</div>
        <div className={workout.checked ? 'checked' : ''}>
          {workout.checked ? 'true' : 'false'}
        </div>
      </span>
      <div className='container'>
        <div
          className='done'
          onClick={() => dispatch({ type: 'CHECK_WORKOUT', id: workout.id })}
        >
          DONE
        </div>
        <div
          className='remove'
          onClick={() => dispatch({ type: 'REMOVE_WORKOUT', id: workout.id })}
        >
          REMOVE
        </div>
      </div>
    </li>
  );
};

export default WorkoutDetails;
