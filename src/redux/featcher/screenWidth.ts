import { createSlice } from '@reduxjs/toolkit';

type menuState = {
  isWidthPC: boolean;
  isNoteBook: boolean;
};

const initialState: menuState = {
  isWidthPC: false,
  isNoteBook: false,
};

const screenWidthSlice = createSlice({
  name: 'screenWidth',
  initialState,
  reducers: {
    setScreenWidth: (state) => {
      const width = window.innerWidth;
      state.isWidthPC = width >= 1550;
      state.isNoteBook = width >= 1024;
    },
  },
});

export const { setScreenWidth } = screenWidthSlice.actions;

export default screenWidthSlice.reducer;
