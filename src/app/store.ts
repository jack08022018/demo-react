import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePage from '../page/home/Slice';
import aboutPage from '../page/about/Slice'

export const store = configureStore({
  reducer: {
    homePage: homePage,
    aboutPage: aboutPage,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
