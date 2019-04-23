import {ADD_PLAYER, ADD_USER, BLOG_NEWS, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => ({
  type : UPDATE_TITLE,
  title
});

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
});

export const changeScore = (index, delta) => ({
  type : CHANGE_SCORE,
  index,
  delta
});

export const removePlayer = (id) => ({
  type : REMOVE_PLAYER,
  id
});

export const addUser = (name) => ({
  type : ADD_USER,
  name
});

export const blogNews = (title) => ({
  type : BLOG_NEWS
})