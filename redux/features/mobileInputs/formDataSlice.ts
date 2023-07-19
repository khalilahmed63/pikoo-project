import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../store';

// Type for our state
export interface IfromData {
  companyName: string;
  platform: string;
  platformCountry: string;
  discountTmpId: string;
  sellingPoints: any
}

// Initial state
const initialState = {
  companyName: '',
  platform: '',
  platformCountry: '',
  discountTmpId: '',
  sellingPoints: []
} as IfromData;

// Actual Slice
export const fromDataSlice = createSlice({
  name: 'fromData',
  initialState,
  reducers: {
    setCompanyName(state, action: PayloadAction<any>) {
      state.companyName = action.payload;
    }, setplatform(state, action: PayloadAction<any>) {
      state.platform = action.payload;
    }, setplatformCountry(state, action: PayloadAction<any>) {
      state.platformCountry = action.payload;
    }, setdiscountTmpId(state, action: PayloadAction<any>) {
      state.discountTmpId = action.payload;
    }, setsellingPoints(state, action: PayloadAction<any>) {
      state.sellingPoints.push (action.payload)
    },
  },
}) as any;

export const { setCompanyName } = fromDataSlice.actions;
export const { setplatform } = fromDataSlice.actions;
export const { setplatformCountry } = fromDataSlice.actions;
export const { setdiscountTmpId } = fromDataSlice.actions;
export const { setsellingPoints } = fromDataSlice.actions;

export const selectFromData = (state: AppState) => state.fromData;

export default fromDataSlice.reducer;
