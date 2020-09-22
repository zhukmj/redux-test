import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../../utils/apiCall';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isListLoading: false,
    isSingleLoading: false,
    error: null,
    list: [],
    single: null,
  },
  reducers: {
    getMoviesListStart: (state) => {
      state.isListLoading = true;
      state.error = null;
    },
    getMoviesListSuccess: (state, { payload }) => {
      state.isListLoading = false;
      state.list = payload;
    },
    getMoviesListFailure: (state, { payload }) => {
      state.isListLoading = false;
      state.error = payload;
    },
  },
});

const {
  getMoviesListStart,
  getMoviesListSuccess,
  getMoviesListFailure,
} = moviesSlice.actions;

export const getMoviesList = ({ title, type, year, page = 1 } = {}) => {
  return async (dispatch) => {
    dispatch(getMoviesListStart());

    try {
      const response = await apiCall.request({
        params: {
          s: title,
          t: type,
          y: year,
          page,
        },
      });

      dispatch(getMoviesListSuccess(response.data.Search));
    } catch (error) {
      dispatch(getMoviesListFailure(error.toString()));
    }
  };
};

export const moviesReducer = moviesSlice.reducer;
