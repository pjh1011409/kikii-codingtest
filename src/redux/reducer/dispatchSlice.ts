import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BusData } from '../../components/Management';

export interface DispatchDataState {
  data: BusData[];
  hour: string;
  minute: string;
}

const initialState: DispatchDataState = {
  data: [],
  hour: '',
  minute: '',
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
  },
});

export const { setData, setHour, setMinute } = dispatchDataSlice.actions;

export default dispatchDataSlice.reducer;
