

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../interfaces/category';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ['Categorys'],
    endpoints: (builder) => ({
        getCategorys: builder.query<ICategory[], void>({
            query: () => '/categorys',
            providesTags: ['Categorys'],
        }),
        getCategory: builder.query<ICategory, void>({
            query: (id) => ({
                url: `/categorys/${id}`,
            }),
            providesTags: ['Categorys']
        }),
        addCategory: builder.mutation<ICategory, Omit<ICategory, "id">>({          
            query: (category) => ({       
                url: '/categorys',
                method: 'POST',
                body: category,
            }),
            invalidatesTags: ['Categorys'],
        }),
        editCategorys: builder.mutation<ICategory, ICategory>({
            query: (category) => ( {
                url: `categorys/${category.id}`,
                method: 'PUT',
                body: category,
            }),
            invalidatesTags: ['Categorys'],
        }),
        removeCategorys: builder.mutation<ICategory, ICategory>({
            query: (id) => ({
                url: `categorys/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Categorys'],
        })
    })
});

export const {
    useGetCategorysQuery,
    useGetCategoryQuery,
    useAddCategoryMutation,
    useEditCategorysMutation,
    useRemoveCategorysMutation
} = categoryApi;
