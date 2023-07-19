import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../store';

// Type for our state
export interface ICustomerId {
  customerId: string;
}

// Initial state
const initialState = {
  customerId: ''
 } as ICustomerId;

// Actual Slice
export const customerIdSlice = createSlice({
  name: 'customerId',
  initialState,
  reducers: {
    setCustomerId(state, action: PayloadAction<any>) {
      state.customerId = action.payload;
    },
  },
}) as any;

export const { setCustomerId } = customerIdSlice.actions;

export const selectCustomerId = (state: AppState) => state.customerId;

export default customerIdSlice.reducer;
