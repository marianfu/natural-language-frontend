import { TEST_ACTION } from '../constants';

export function testAction() {
  return dispatch => {
    dispatch({ type: TEST_ACTION, payload: "test" });
  }
}