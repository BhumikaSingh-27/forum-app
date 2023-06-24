export const initialValue = {
  posts: [],
  username:"",
  name:""
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, posts: action.payload };
    }
    case "GET_USERNAME":{
        return {...state, username: action.payload}
    }
    case "GET_NAME":{
        return {...state, username: action.payload}
    }
    default:
      return state;
  }
};
