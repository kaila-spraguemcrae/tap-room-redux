import kegListReducer from '../../reducers/keg-list-reducer';

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

  test('Should return default dtate if there is not action type passed to the reducer', ()=> {
    expect(kegListReducer({}, {type:null})).toEqual({});
  });

  test('Should add a keg to the masterKegList', ()=> {
    const { name, brand, alcoholContent, price, flavor, decription, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      alcoholContent,
      price,
      flavor,
      decription,
      quantity,
      id
    }
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
});