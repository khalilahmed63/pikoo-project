import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { inputSlice } from './features/mobileInputs/mobileInputSlice';
import { requestIdSlice } from './features/mobileInputs/requestIdSlice'
import { customerIdSlice } from './features/mobileInputs/customerIdSlice'
import { fromDataSlice } from './features/mobileInputs/formDataSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      [inputSlice.name]: inputSlice.reducer,
      [requestIdSlice.name]: requestIdSlice.reducer,
      [customerIdSlice.name]: customerIdSlice.reducer,
      [fromDataSlice.name]: fromDataSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
