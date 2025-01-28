import {APP_ENV} from "../../env";

import {Link} from "react-router-dom";

import {useDeleteCategoryMutation, useGetCategoriesQuery} from "../../services/apiCategory.ts";
import {Button, notification} from "antd";


const CategoryListPage = () => {


    const { data: list, error, isLoading } = useGetCategoriesQuery();

    const [deleteCategory] = useDeleteCategoryMutation();
    const handleDelete = async (id: number) => {
        try {
            await deleteCategory(id).unwrap();
            notification.success({
                message: 'Категорія видалена',
                description: 'Категорія успішно видалена!',
            });
        } catch {
            notification.error({
                message: 'Помилка видалення категорії',
                description: 'Щось пішло не так, спробуйте ще раз.',
            });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories!</div>;

    console.log("APP_ENV", APP_ENV.REMOTE_BASE_URL);
    console.log("Render component");

    const mapData = list?.map((category) => (
        <tr key={category.id}

            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
            </th>
            <td className="px-6 py-4">
                {category.slug}
            </td>
            <td className="px-6 py-4">
                {category.description}
            </td>
            <td className="px-6 py-4">
                <Link to={`edit/${category.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <Button
                        style={{ marginLeft: 'auto', border: 'none' }}
                    >
                        <svg className="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>

                    </Button>
                </Link>
                <Button
                    danger
                    onClick={() => handleDelete(category.id)}
                    style={{marginRight: '0vh',marginLeft: '5vh', border: 'none'}}
                >
                    <svg className="w-[36px] h-[36px] text-black-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </Button>
            </td>
        </tr>
    ));


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
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {mapData}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CategoryListPage;