import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index';

describe('selectedKegReducer', () => {
  let action;

  const keg = {
    name: "test",
    brand: "test",
    alcoholContent: "test",
    price: "test",
    flavor: "test",
    description: "test",
    quantity: 24,
    id: 1
  }

  test('Should return default state if no type is recognized', () => {
    expect(selectedKegReducer({}, {type: null})).toEqual({});
  });

  test('Should return selected keg when SELECTED_KEG is called', () => {
    expect(selectedKegReducer({}, action)).toEqual(keg);
  });
});