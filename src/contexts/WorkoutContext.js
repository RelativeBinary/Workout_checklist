import React, { createContext, useReducer, useEffect } from 'react';
import { workoutReducer } from '../reducers/workoutReducer';
import { myWorkouts } from '../data/myWorkouts';

export const WorkoutContext = createContext();

const WorkoutContextProvider = (props) => {
  console.log(myWorkouts);
  const [workouts, dispatch] = useReducer(
    workoutReducer,
    [...myWorkouts],
    () => {
      const localData = localStorage.getItem('workouts');
      return localData ? JSON.parse(localData) : [];
    }
  );

  //save to local storage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  //check if all workouts have been completed
  useEffect(() => {
    let workoutsComplete = true;
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].checked === false) {
        workoutsComplete = false;
        break;
      }
    }

    if (workoutsComplete === true && workouts.length > 0) {
      //move logic to the reducer
      alert('Great Work! Keep It Up! Proud Of You!');
      for (let i = 0; i < workouts.length; i++) {
        dispatch({ type: 'CHECK_WORKOUT', id: workouts[i].id });
      }
    }
  }, [workouts]);

  return (
    <WorkoutContext.Provider value={{ workouts, dispatch }}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
