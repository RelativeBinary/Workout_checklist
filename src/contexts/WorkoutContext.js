import React, { createContext, useReducer, useEffect } from 'react';
import { workoutReducer } from '../reducers/workoutReducer';
import { myWorkouts } from '../data/myWorkouts';

export const WorkoutContext = createContext();

const WorkoutContextProvider = (props) => {
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

  return (
    <WorkoutContext.Provider value={{ workouts, dispatch }}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
