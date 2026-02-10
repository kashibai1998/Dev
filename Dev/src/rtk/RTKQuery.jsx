import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    {
      maxRetries: 2,
    }
  ),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos?_limit=10",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
export const { useGetTodosQuery, useAddTodoMutation } = apiSlice;
export default apiSlice.reducer;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com",
//   }),
//   endpoints: (builder) => ({
//     getTodos: builder.query({
//       query: () => "/todos?_limit=10",
//     }),
//   }),
// });

// export const { useGetTodosQuery } = apiSlice;
// export default apiSlice.reducerPath;
