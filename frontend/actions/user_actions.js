import * as UserAPIUtil from '../util/user_api_util';
import { RECEIVE_EVENTS } from './events_actions';
// export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const BOOKMARK_EVENT = 'BOOKMARK_EVENT'
export const REGISTER_EVENT = "REGISTER_EVENT";
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
// export const receiveBookmark = (bookmarks) => {
//   return ({
//     type: BOOKMARK_EVENT,
//     bookmarks
//   })
// }

export const receiveRegistration = (user) => {
  // debugger
  return ({
    type: REGISTER_EVENT,
    user 
  })
}
//payload has user.bookmarked_events and the event object 
export const receiveBookmark = (payload) => ({
  type: RECEIVE_BOOKMARK,
  payload
});

// export const receiveTickets = (tickets) => ({
//   type: RECEIVE_EVENTS,
//   tickets
// });

export const getBookmarks = () => dispatch => (
  UserAPIUtil.fetchBookmarkedEvents()
    .then(res => dispatch(receiveBookmarks(res)))
);
export const getTickets = () => dispatch => (
  UserAPIUtil.fetchRegisteredEvents()
    .then(res => dispatch(receiveTickets(res)))
);

export const requestBookmark = (event_id) => dispatch => (
  UserAPIUtil.bookmark(event_id)
    .then(res => dispatch(receiveBookmark(res)))
)

export const requestUnBookmark = (event_id) => dispatch => (
  UserAPIUtil.unbookmark(event_id)
    .then(res => dispatch(receiveBookmark(res)))
)

export const requestRegistration = (eventId) => dispatch => (
  UserAPIUtil.postRegistration(eventId)
    .then(res => (
      dispatch(receiveRegistration(res))
    ))
);
//also created events