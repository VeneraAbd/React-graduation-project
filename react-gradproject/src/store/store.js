import {configureStore} from '@reduxjs/toolkit';

import countriesSlice from '../components/Home/countrySlice';

const store = configureStore({
  reducer: {

    countries: countriesSlice.reducer,
  
  }
})
export default store