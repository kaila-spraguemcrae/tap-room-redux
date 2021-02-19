import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  test('Should return default dtate if there is not action type passed to the reducer', ()=> {
    expect(kegListReducer({}, {type:null})).toEqual({});
  });
});