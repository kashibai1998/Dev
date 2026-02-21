import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const todoRTK = createApi({
  reducerPath: "todortkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "todos?_limit=5",
    }),
  }),
});
export const { useGetTodoQuery } = todoRTK;
