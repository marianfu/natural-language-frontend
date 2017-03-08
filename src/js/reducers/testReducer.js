import { TEST_ACTION } from '../constants';

export default function testReducer(state = [], action) {
  switch (action.type) {
    case TEST_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
}