import {ADD_PLYAER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => ({
  type : UPDATE_TITLE,
  title
});

export const addPlayer = (name) => ({
  type: ADD_PLYAER,
  name
});

export const changeScore = (index, delta) => ({
  type : CHANGE_SCORE,
  index,
  delta
});

export const removePlayer = (index) => ({
  type : REMOVE_PLAYER,
  index
});