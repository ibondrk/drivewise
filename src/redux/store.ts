import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './featcher/menu';
// import themeSlice from './featcher/theme';
import screenWidthSlice from './featcher/screenWidth';

const store = configureStore({
  reducer: {
    menu: menuSlice,
    // theme: themeSlice,
    screenWidth: screenWidthSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
