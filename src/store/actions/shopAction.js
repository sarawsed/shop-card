export const ADD_ITEM = "ADD_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const decreaseItem = (itemId) => ({
  type: DECREASE_ITEM,
  payload: itemId,
});
