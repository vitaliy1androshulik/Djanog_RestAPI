// Створюємо API Slice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {APP_ENV} from "../env";
import {ICategoryItem, ICategoryPostRequest} from "../pages/Category/types.ts";

export const apiCategory = createApi({
    reducerPath: 'Category', // Унікальний шлях для цього API у Redux Store
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Базовий URL
    tagTypes: ["Category"], // Додаємо tag для категорій
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], void>({ // Запит для отримання категорій
            query: () => 'categories', // Шлях до endpoint
            providesTags: ["Category"], // Позначаємо, що цей запит пов'язаний з "Category"
        }),
        createCategory: builder.mutation<ICategoryItem, ICategoryPostRequest>({
            query: (newCategory) => ({
                url: "categories/",
                method: "POST",
                body: newCategory,
            }),
            invalidatesTags: ["Category"], // Інвалідовуємо "Category" після створення
        }),
    }),
});

// Автоматично згенерований хук
export const { useGetCategoriesQuery, useCreateCategoryMutation  } = apiCategory;