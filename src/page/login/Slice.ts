import { 
  createSlice,
  // PayloadAction,
} from '@reduxjs/toolkit';

export interface RootState {
  collapsed: boolean;
}

const initialState: RootState = {
  collapsed: false,
};

export const Slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    // selectPage: (state, action: PayloadAction<string>) => {
    //   state.selectedPage = action.payload;
    // },
  },
});

// export const { onCollapse, selectPage } = Slice.actions;

export default Slice.reducer;
