//import {useEffect, useState} from "react";
//import axios from "axios";
import {APP_ENV} from "../../../env";
import {useGetCategoriesQuery} from "../../../services/apiCategory.ts";
//import {ICategoryItem} from "../types.ts";

const CategoryListPage = () => {


    const { data: list, error, isLoading } = useGetCategoriesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories!</div>;
    // const [list, setList] = useState<ICategoryItem[]>([
    //     // {
    //     //     id: 1,
    //     //     name:"Ноути",
    //     //     slug:"notebook",
    //     //     created_at:"1111",
    //     //     updated_at:"2222"
    //     // }
    // ]);
    //
    // useEffect(() => {
    //     axios.get<ICategoryItem[]>(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
    //         .then(resp => {
    //             const {data} = resp;
    //             setList(data); //оновляємо дані у стейті, буде працювати Render компонента
    //             console.log("Результат асинхрого методу на сервер", data);
    //         });
    //     console.log("Use effect")
    // }, []);

    console.log("APP_ENV", APP_ENV.REMOTE_BASE_URL)
    console.log("Render component");

    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Список категорій</h1>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Опис
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Дата створення
                        </th>
                        <th scope="col" className="px-6 py-3">
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {list?.map((category) => (
                        <tr key={category.id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.name}
                            </th>
                            <td className="px-6 py-4">
                                {category.slug}
                            </td>
                            <td className="px-6 py-4">
                                {category.description}
                            </td>
                            <td className="px-6 py-4">
                                {category.created_at}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default CategoryListPage;