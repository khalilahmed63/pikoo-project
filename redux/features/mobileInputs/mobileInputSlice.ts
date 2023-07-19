/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../store';

// Type for our state

interface IInput {
  text: string;
  id: string;
  value: string;
  name: string;
  type: string;
  isChecked: Boolean,
}
export interface InputState {
  inputs: IInput[];
  input: IInput;
}

// Initial state
const initialState: InputState = {
  inputs: [
    {
      text: "Имя",
      id: "name",
      value: "true",
      name: "name",
      type: "text",
      isChecked: false,
    },
    {
      text: "Отчество",
      id: "fatherName",
      value: "true",
      name: "fatherName",
      type: "text",
      isChecked: false,
    },
    {
      text: "Фамилия",
      id: "surname",
      value: "true",
      name: "surname",
      type: "text",
      isChecked: false,
    },
    {
      text: "Пол",
      id: "gender",
      value: "true",
      name: "gender",
      type: "text",
      isChecked: false,
    },
    {
      text: "Возраст",
      id: "age",
      value: "true",
      name: "age",
      type: "number",
      isChecked: false,
    },
    {
      text: "Дата рождения",
      id: "dob",
      value: "true",
      name: "dob",
      type: "date",
      isChecked: false,
    },
    {
      text: "E-mail",
      id: "email",
      value: "true",
      name: "email",
      type: "email",
      isChecked: false,
    },
    {
      text: "Личный номер телефона",
      id: "personalPhone",
      value: "true",
      name: "personalPhone",
      type: "text",
      isChecked: false,
    },
    {
      text: "Рабочий телефон",
      id: "workPhone",
      value: "true",
      name: "workPhone",
      type: "text",
      isChecked: false,
    },
    {
      text: "Домашний телефон",
      id: "homePhone",
      value: "true",
      name: "homePhone",
      type: "text",
      isChecked: false,
    },
  ],
  input: {
    text: "Домашний телефон",
    id: "home-phone",
    value: "true",
    name: "home-phone",
    type: "text",
    isChecked: false,
  },
 } as InputState;

// Actual Slice
export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputState(state, action: PayloadAction<string>) {
      // state.inputs[2].isChecked = action.payload;      
      state.inputs.map((inp) => (
        inp.isChecked = inp.id === action.payload ? !inp.isChecked : inp.isChecked
      ))
    },
  },
}) as any;

export const { setInputState } = inputSlice.actions;

export const selectInputState = (state: AppState) => state.input;
export const selectInputsState = (state: AppState) => state.inputs;

export default inputSlice.reducer;
