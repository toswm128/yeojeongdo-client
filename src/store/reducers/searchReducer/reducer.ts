import produce from "immer";
import { createReducer } from "typesafe-actions";
import { SEARCH_MAP, SET_CENTER_SEARCHING, SET_SEARCH_MODAL } from "./actions";
import { SearchState } from "./types";

const initalState: SearchState = {
  searchMapList: [],
  searchValue: ["대구 소프트웨어 고등학교"],
  centerSearching: null,
  isSearchModal: false,
};

export default createReducer<SearchState>(initalState, {
  [SEARCH_MAP]: (state, action) =>
    produce(state, draft => {
      draft.searchMapList = action.payload.data;
      const isOld =
        draft.searchValue.lastIndexOf(action.payload.searchValue) !== -1;
      draft.searchValue = [
        action.payload.searchValue,
        ...draft.searchValue.filter(value => {
          return value !== action.payload.searchValue;
        }),
      ];
      console.log(
        isOld,
        draft.searchValue.lastIndexOf(action.payload.searchValue)
      );
    }),
  [SET_CENTER_SEARCHING]: (state, action) =>
    produce(state, draft => {
      draft.centerSearching = action.payload;
    }),
  [SET_SEARCH_MODAL]: (state, action) =>
    produce(state, draft => {
      draft.isSearchModal = action.payload;
    }),
});
