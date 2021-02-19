import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index';

describe('selectedKegReducer', () => {
  let action;

  test('Should return default state if no type is recognized', () => {
    expect(selectedKegReducer({}, {type: null})).toEqual({});
  });
});