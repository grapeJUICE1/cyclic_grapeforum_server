//action types for fetching content
export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const FETCH_FULL_POST_START = 'FETCH_FULL_POST_START';
export const FETCH_FULL_POST_SUCCESS = 'FETCH_FULL_POST_SUCCESS';
export const FETCH_FULL_POST_FAIL = 'FETCH_FULL_POST_FAIL';

export const FETCH_ANSWERS_START = 'FETCH_ANSWERS_START';
export const FETCH_ANSWERS_SUCCESS = 'FETCH_ANSWERS_SUCCESS';
export const FETCH_ANSWERS_FAIL = 'FETCH_ANSWERS_FAIL';

export const FETCH_POST_COMMENTS_START = 'FETCH_POST_COMMENTS_START';
export const FETCH_POST_COMMENTS_SUCCESS = 'FETCH_POST_COMMENTS_SUCCESS';
export const FETCH_POST_COMMENTS_FAIL = 'FETCH_POST_COMMENTS_FAIL';

export const FETCH_ANSWER_COMMENTS_START = 'FETCH_ANSWER_COMMENTS_START';
export const FETCH_ANSWER_COMMENTS_SUCCESS = 'FETCH_ANSWER_COMMENTS_SUCCESS';
export const FETCH_ANSWER_COMMENTS_FAIL = 'FETCH_ANSWER_COMMENTS_FAIL';

//action types for authenticating
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

//action types for like and dislike
export const LIKE_DISLIKE_POST_START = 'LIKE_DISLIKE_POST_START';
export const LIKE_DISLIKE_POST_SUCCESS = 'LIKE_DISLIKE_POST_SUCCESS';
export const LIKE_DISLIKE_POST_FAIL = 'LIKE_DISLIKE_POST_FAIL';

export const LIKE_DISLIKE_ANSWER_START = 'LIKE_DISLIKE_ANSWER_START';
export const LIKE_DISLIKE_ANSWER_SUCCESS = 'LIKE_DISLIKE_ANSWER_SUCCESS';
export const LIKE_DISLIKE_ANSWER_FAIL = 'LIKE_DISLIKE_ANSWER_FAIL';

export const LIKE_DISLIKE_POST_COMMENT_START =
  'LIKE_DISLIKE_POST_COMMENT_START';
export const LIKE_DISLIKE_POST_COMMENT_SUCCESS =
  'LIKE_DISLIKE_POST_COMMENT_SUCCESS';
export const LIKE_DISLIKE_POST_COMMENT_FAIL = 'LIKE_DISLIKE_POST_COMMENT_FAIL';

export const LIKE_DISLIKE_ANSWER_COMMENT_START =
  'LIKE_DISLIKE_ANSWER_COMMENT_START';
export const LIKE_DISLIKE_ANSWER_COMMENT_SUCCESS =
  'LIKE_DISLIKE_ANSWER_COMMENT_SUCCESS';
export const LIKE_DISLIKE_ANSWER_COMMENT_FAIL =
  'LIKE_DISLIKE_ANSWER_COMMENT_FAIL';

export const CHECK_USER_LIKE_DISLIKE_POST = 'CHECK_USER_LIKE_DISLIKE_POST';
export const CHECK_USER_LIKE_DISLIKE_POST_FAIL =
  'CHECK_USER_LIKE_DISLIKE_POST_FAIL';

export const CHECK_USER_LIKE_DISLIKE_ANSWER = 'CHECK_USER_LIKE_DISLIKE_ANSWER';
export const CHECK_USER_LIKE_DISLIKE_ANSWER_FAIL =
  'CHECK_USER_LIKE_DISLIKE_ANSWER_FAIL';

// export const CHECK_USER_LIKE_DISLIKE_POST_COMMENT =
//   'CHECK_USER_LIKE_DISLIKE_POST_COMMENT';
// export const CHECK_USER_LIKE_DISLIKE_POST_COMMENT_FAIL =
//   'CHECK_USER_LIKE_DISLIKE_POST_COMMENT_FAIL';

export const CHECK_USER_LIKE_DISLIKE_ANSWER_COMMENT =
  'CHECK_USER_LIKE_DISLIKE_ANSWER_COMMENT';
export const CHECK_USER_LIKE_DISLIKE_ANSWER_COMMENT_FAIL =
  'CHECK_USER_LIKE_DISLIKE_ANSWER_COMMENT_FAIL';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';

export const EDIT_USER_DATA_START = 'EDIT_USER_DATA_START';
export const EDIT_USER_DATA_SUCCESS = 'EDIT_USER_DATA_SUCCESS';
export const EDIT_USER_DATA_FAIL = 'EDIT_USER_DATA_FAIL';

export const UPLOAD_PHOTO_START = 'UPLOAD_PHOTO_START';
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';
export const UPLOAD_PHOTO_FAIL = 'UPLOAD_PHOTO_FAIL';
