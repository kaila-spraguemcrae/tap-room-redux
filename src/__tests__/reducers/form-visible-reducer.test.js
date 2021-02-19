import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as a from '../../actions/index';

describe ('formVisibleReducer', ()=> {

  test('Should return default state if no action type is recognized', ()=> {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });

  test('Should return true if toggle action is passed', () => {
    expect(formVisibleReducer(false,a.toggleForm())).toEqual(true);
  });
});