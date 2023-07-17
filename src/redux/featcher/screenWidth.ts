import { createSlice } from '@reduxjs/toolkit';

type menuState = {
  isWidthPC: boolean;
  isNoteBook: boolean;
  // isTablet: boolean;
  // is2k: boolean;
};

const initialState: menuState = {
  isWidthPC: false,
  isNoteBook: false,
  // isTablet: false,
  // is2k: false,
};

const screenWidthSlice = createSlice({
  name: 'screenWidth',
  initialState,
  reducers: {
    setScreenWidth: (state) => {
      const width = window.innerWidth;
      state.isWidthPC = width >= 1440;
      state.isNoteBook = width >= 1024;
      // state.isTablet = width >= 768;
      // state.is2k = width >= 768;
    },
  },
});

export const { setScreenWidth } = screenWidthSlice.actions;

export default screenWidthSlice.reducer;
