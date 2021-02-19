import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const {name, brand, alcoholContent, price, flavor, description, quantity, id} = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    alcoholContent,
    price,
    flavor,
    description,
    quantity,
    id
  }
}