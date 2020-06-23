import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';

const NewWorkoutForm = () => {
  const { dispatch } = useContext(WorkoutContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_WORKOUT', workout: { title, desc } });
    setTitle('');
    setDesc('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Excercise title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Excercise description'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type='submit' value='Add Exercise' />
    </form>
  );
};

export default NewWorkoutForm;
