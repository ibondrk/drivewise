import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './featcher/menu';
// import themeSlice from './featcher/theme';
import screenWidthSlice from './featcher/screenWidth';
import sectionIdSlice from './featcher/section';

const store = configureStore({
  reducer: {
    menu: menuSlice,
    section: sectionIdSlice,
    screenWidth: screenWidthSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
