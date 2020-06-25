import React, { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../contexts/WorkoutContext';
import Modal from 'react-modal';

export default function WorkoutDoneModal() {
  Modal.setAppElement('#root');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatch, workouts } = useContext(WorkoutContext);

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
      setIsModalOpen(true);
      for (let i = 0; i < workouts.length; i++) {
        dispatch({ type: 'CHECK_WORKOUT', id: workouts[i].id });
      }
    }
  }, [workouts]);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h2>This is a modal</h2>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}
