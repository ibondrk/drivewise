import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type sectionId = {
  id: number;
};

const initialState: sectionId = {
  id: 0,
};

const sectionIdSlice = createSlice({
  name: 'section',
  initialState: initialState,
  reducers: {
    setSectionId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setSectionId } = sectionIdSlice.actions;

export default sectionIdSlice.reducer;
