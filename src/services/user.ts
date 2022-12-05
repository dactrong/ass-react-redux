import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interfaces/users";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    signup: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
    signin: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/signin",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useSignupMutation,useSigninMutation } = userApi;
