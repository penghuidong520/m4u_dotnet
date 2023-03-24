import { Reducer } from 'redux';

interface EmptyState {}

const emptyReducer: Reducer<EmptyState> = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default emptyReducer;