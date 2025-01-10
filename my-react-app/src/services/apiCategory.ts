// Створюємо API Slice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {APP_ENV} from "../env";
import {ICategoryItem} from "../pages/category/types.ts";

export const apiCategory = createApi({
    reducerPath: 'category', // Унікальний шлях для цього API у Redux Store
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Базовий URL
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], void>({ // Запит для отримання категорій
            query: () => 'categories', // Шлях до endpoint
        }),
    }),
});

// Автоматично згенерований хук
export const { useGetCategoriesQuery } = apiCategory;