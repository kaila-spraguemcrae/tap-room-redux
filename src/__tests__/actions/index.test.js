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
});