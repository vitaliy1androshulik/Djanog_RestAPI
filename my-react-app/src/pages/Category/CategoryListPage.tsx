// import {useEffect, useState} from "react";
// import axios from "axios";
import {APP_ENV} from "../../env";
// import {ICategoryItem} from "../types.ts";
import {useGetCategoriesQuery} from "../../services/apiCategory.ts";
import {Link} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const CategoryListPage = () => {

    // const navigate = useNavigate();

    const { data: list, error, isLoading } = useGetCategoriesQuery();

    // const [createCategory] = useCreateCategoryMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories!</div>;
    // const [list, setList] = useState<ICategoryItem[]>([]);
    //
    // useEffect(() => {
    //     axios.get<ICategoryItem[]>(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
    //         .then(resp => {
    //             const {data} = resp;
    //             setList(data); //оновляємо дані у стейті, буде працювати Render компонента
    //             console.log("Результат асинхрого методу на сервер", data);
    //         });
    //     console.log("Use Effect");
    // }, []);

    console.log("APP_ENV", APP_ENV.REMOTE_BASE_URL);
    console.log("Render component");

    // const onCrateCategoryClick = async () => {
    //
    // }



    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Список категорій</h1>

            <Link to={"create"}
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Додати
            </Link>


            <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
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