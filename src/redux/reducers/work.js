import {ADD_USER} from "../actionTypes";

const initialState = {
  title: 'User Table',
  users: [
      {idx:1 , firstName: 'KIM', lastName: 'JUNG HOON', userName: '@twitter'},
      {idx:2 , firstName: 'LDK', lastName: 'DASD ASDF', userName: '@twitter'},
      {idx:3 , firstName: 'SDF', lastName: 'QWER REQW', userName: '@twitter'},
      {idx:4 , firstName: 'EGW', lastName: 'ZXCV FDAE', userName: '@twitter'},
      {idx:5 , firstName: 'KIM', lastName: 'JUNG HOON', userName: '@twitter'},
      {idx:6 , firstName: 'LDK', lastName: 'DASD ASDF', userName: '@twitter'},
      {idx:7 , firstName: 'SDF', lastName: 'QWER REQW', userName: '@twitter'},
      {idx:8 , firstName: 'EGW', lastName: 'ZXCV FDAE', userName: '@twitter'}
    ]
}

export const workReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users
          /*{
            idx:  action.idx,
            firstName: action.firstName,
            lastName: action.lastName,
            userName: action.userName
          }*/
        ]
      }

    default:
      return state;
  }
}
