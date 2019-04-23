import {BLOG_NEWS} from "../actionTypes";


const initialState = {
  title: 'Blog News',
  users: [
    {idx:1 , title: 'news title1', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:2 , title: 'news title2', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:3 , title: 'news title3', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:4 , title: 'news title4', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:5 , title: 'news title5', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:6 , title: 'news title6', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:7 , title: 'news title7', text: '1234566 가나다라마바사', userName: '@twitter'},
    {idx:8 , title: 'news title8', text: '1234566 가나다라마바사', userName: '@twitter'}
  ]
};

export const blogReducer = (state = initialState, action) => {

  switch(action.type) {

    case BLOG_NEWS:
      return {
        ...state,
        news: [
          ...state.news
          /*{
            idx:  action.idx,
            firstName: action.firstName,
            lastName: action.lastName,
            userName: action.userName
          }*/
        ]
      };

    default:
      return state;
  }
};

