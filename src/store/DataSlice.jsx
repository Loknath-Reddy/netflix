import { createSlice } from "@reduxjs/toolkit";
import data from "./../data/titles.json";
const initialState = {
  data: data,
};
export const DataSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {},
});

export default DataSlice.reducer;
