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

  const customStyles = {
    content: {
      background: '#666666',
    },
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            backgroundColor: '#454544',
            textAlign: 'center',
            maxHeight: '50%',
            color: 'white',
          },
        }}
      >
        <div>
          <h2 className='neon'>Great Work!</h2>
          <button
            className='modal-button'
            onClick={() => setIsModalOpen(false)}
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
}
