import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BusData } from '../../components/Management';

export interface DispatchDataState {
  data: BusData[];
  hour: string;
  minute: string;
  companyName: string;
}

const initialState: DispatchDataState = {
  data: [],
  hour: '',
  minute: '',
  companyName: '',
};

const dispatchDataSlice = createSlice({
  name: 'dispatchData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<BusData[]>) => {
      state.data = action.payload;
    },
    setHour: (state, action: PayloadAction<string>) => {
      state.hour = action.payload;
    },
    setMinute: (state, action: PayloadAction<string>) => {
      state.minute = action.payload;
    },
    setComanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
  },
});

export const { setData, setHour, setMinute, setComanyName } = dispatchDataSlice.actions;

export default dispatchDataSlice.reducer;
