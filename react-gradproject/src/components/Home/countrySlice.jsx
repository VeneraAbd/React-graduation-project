import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


export const callAPI = createAsyncThunk('countries/callAPI',
  async (obj, {state, error}) => {
    try {

      const req = await fetch('https://restcountries.com/v3.1/all')
      const resp = await req.json()
      return resp

    }
    catch (error) {
      console.log(error, "error")
      return []
    }

  }
)


const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    flags: [],
    isLoading: false,
    
  },

  reducers: {},
  extraReducers: {
    [callAPI.pending]: (state) => {
      state.isLoading = true;
      //return []
    },
    [callAPI.fulfilled]: (state, action) => {
      //state.flags = "resolved";
       state.flags = action.payload;
       state.isLoading =false;
       //return action.payload
    },
    [callAPI.rejected]: (state, action) => {
        state.isLoading = false;
    //   state.error = action.payload
        return []
  }

  },

})


export const actions = countriesSlice.actions
export default countriesSlice