import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from '../../actions/index'

describe('kegListReducer', () => {

  let action;

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

  const currentState = {
    1: {
      name: "test",
      brand: "test",
      alcoholContent: "test",
      price: "test",
      flavor: "test",
      description: "test",
      quantity: 24,
      id: 1
    },
    2: {
      name: "test2",
      brand: "test2",
      alcoholContent: "test2",
      price: "test2",
      flavor: "test2",
      description: "test2",
      quantity: 24,
      id: 2
    }
  }

  test('Should return default dtate if there is not action type passed to the reducer', ()=> {
    expect(kegListReducer({}, {type:null})).toEqual({});
  });

  test('Should add a keg to the masterKegList', ()=> {
    const { name, brand, alcoholContent, price, flavor, decription, quantity, id } = kegData;
    action = a.addKeg(kegData)
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name,
        brand,
        alcoholContent,
        price,
        flavor,
        decription,
        quantity,
        id
      }
    });
  });

  test('Should delete a keg', ()=>{
    action = a.deleteKeg(1)
    expect(kegListReducer(currentState,action)).toEqual({
      2: {
        name: "test2",
        brand: "test2",
        alcoholContent: "test2",
        price: "test2",
        flavor: "test2",
        description: "test2",
        quantity: 24,
        id: 2
      }
    })
  });
});