import rootReducer from '../../reducers/index';
import * as a from '../../actions/index'
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });
  test('Check that initial state of kegListReducers matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type: null}));
  });
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });
  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, {type: null}));
  });

  test('Check that ADD_KEG works for kegListReducer and root reducer', () => {
    const kegData = {
      name: "test",
      brand: "test",
      alcoholContent: "test",
      price: "test",
      flavor: "test",
      description: "test",
      quantity: 24,
      id: 1
    }
    const action = a.addKeg(kegData);
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  test('Check that SELECT_KEG action works for selectedKegReducer and root reducer', () => {
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
    const action = a.selectKeg(keg);
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action))
  });
  test('check that DESLECT_KEG action works for selectedKegReducer and root reducer', ()=>{
    const action = a.deselectKeg();
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action))
  }); 
});