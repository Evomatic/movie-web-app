/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUserRequest {
  email: string;
  password: string;
}

export const authAPI = createApi({
  reducerPath: "authAPI",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/auth/",
  }),
  endpoints: (build) => ({
    login: build.mutation<any, IUserRequest>({
      query: ({ email, password }) => ({
        url: `login`,
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const signupAPI = createApi({
  reducerPath: "signupAPI",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/",
  }),
  endpoints: (build) => ({
    signup: build.mutation<any, IUserRequest>({
      query: ({ email, password }) => ({
        url: `users`,
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useSignupMutation } = signupAPI;
export const { useLoginMutation } = authAPI;
