import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../store';

// Type for our state
export interface IRequestId {
  requestId: string;
}

// Initial state
const initialState = {
  requestId: ''
 } as IRequestId;

// Actual Slice
export const requestIdSlice = createSlice({
  name: 'requestId',
  initialState,
  reducers: {
    setRequestId(state, action: PayloadAction<any>) {
      state.requestId = action.payload;
    },
  },
}) as any;

export const { setRequestId } = requestIdSlice.actions;

export const selectRequestId = (state: AppState) => state.requestId;

export default requestIdSlice.reducer;
