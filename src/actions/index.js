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

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg
});

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});
