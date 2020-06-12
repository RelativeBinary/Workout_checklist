import { v4 } from 'uuid';

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [
        ...state,
        {
          title: action.workout.title,
          desc: action.workout.desc,
          id: v4(),
          checked: false,
        },
      ];
    case 'REMOVE_WORKOUT':
      return state.filter((workout) => workout.id !== action.id);
    case 'CHECK_WORKOUT':
      //find the index of the workout
      const foundIndex = state.findIndex((workout) => workout.id === action.id);

      //create a new workout item using that index item with checked value inversed
      //insert into array replacing the original item
      let newState = [...state];
      newState[foundIndex] = {
        title: state[foundIndex].title,
        desc: state[foundIndex].desc,
        id: state[foundIndex].id,
        checked: !state[foundIndex].checked,
      };
      return newState;
    default:
      return state;
  }
};
