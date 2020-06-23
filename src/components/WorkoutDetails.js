import React, { useContext } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);

  return (
    <li className={workout.checked ? 'checked' : ''}>
      <span>
        <div className='title'>{workout.title}</div>
        <div className='desc'>{workout.desc}</div>
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
