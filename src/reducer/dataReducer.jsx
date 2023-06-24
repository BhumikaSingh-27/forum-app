export const initialValue = {
  posts: [],
  username: "",
  name: "",
  filter: "",
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, posts: action.payload };
    }
    case "GET_USERNAME": {
      return { ...state, username: action.payload };
    }
    case "GET_NAME": {
      return { ...state, username: action.payload };
    }
    case "UPVOTE": {
      const updatedPosts = state.posts.map((post) =>
        post.postId === action.payload
          ? { ...post, upvotes: post.upvotes + 1 }
          : post
      );

      return { ...state, posts: updatedPosts };
    }
    case "FILTER": {
      return { ...state, filter: action.payload };
    }
    case "DOWNVOTE": {
      const updatedPosts = state.posts.map((post) =>
        post.postId === action.payload
          ? { ...post, downvotes: post.downvotes + 1 }
          : post
      );
      console.log("updated", updatedPosts);
      return { ...state, posts: updatedPosts };
    }
    default:
      return state;
  }
};
