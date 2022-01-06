import { 
  createSlice,
  combineReducers,
} from '@reduxjs/toolkit';
import addProductReducer from './component/addProduct/Slice';

const initialState = {
};

export const Slice = createSlice({
  name: 'aboutPage',
  initialState,
  reducers: {
  },
});

export const { setName } = Slice.actions;

const aboutReducer = combineReducers({
  mainView: Slice.reducer,
  addProduct: addProductReducer,
});
export default aboutReducer;
