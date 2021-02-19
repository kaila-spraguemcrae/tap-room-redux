import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('tap-room actions', ()=> {

  test('addKeg should create ADD_KEG action', ()=> {
    expect(a.addKeg({
      name: "test",
      brand: "test",
      alcoholContent: "test",
      price: "test",
      flavor: "test",
      description: "test",
      quantity: 24,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: "test",
      brand: "test",
      alcoholContent: "test",
      price: "test",
      flavor: "test",
      description: "test",
      quantity: 24,
      id: 1
    });
  });

  test('deleteKeg should create DELETE_KEG action', ()=>{
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  test('toggleForm should create TOGGLE_FORM action', ()=> {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  test('selectKeg should create SELECT_KEG action', () => {
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
    expect(a.selectKeg(keg)).toEqual({
      type: c.SELECT_KEG,
      keg
    });
  });

  test('deselectKeg should create DESELECT_KEG action', () => {
    expect(a.deselectKeg()).toEqual({
      type: c.DESELECT_KEG
    });
  });
});