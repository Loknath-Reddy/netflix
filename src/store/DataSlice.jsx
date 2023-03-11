import { createSlice } from "@reduxjs/toolkit";
import data from "./../data/titles.json";
const initialState = {
  data,
};
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default DataSlice.reducer;
