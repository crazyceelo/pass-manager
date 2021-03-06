import { SET_GAMES } from '../actions/fetchGames';

export default function games(state = {}, action = {}) {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      }
      // return action.games; // .games is the error
    default: return state;
  }
}