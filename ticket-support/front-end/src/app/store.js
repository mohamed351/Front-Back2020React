import { configureStore } from '@reduxjs/toolkit';
import Auth from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    auth: Auth,
  },
});
