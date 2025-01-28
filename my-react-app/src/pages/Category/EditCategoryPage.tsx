import { Form, Input, Button, notification } from 'antd';
import TextArea from "antd/es/input/TextArea";
import {useNavigate, useParams} from "react-router-dom";
import {useGetCategoryQuery, useUpdateCategoryMutation} from "../../services/apiCategory.ts";
import {ICategoryPutRequest} from "./types.ts";
const { Item } = Form;

const EditCategoryPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: category, isError, isLoading } = useGetCategoryQuery(Number(id));
    const [updateCategory] = useUpdateCategoryMutation();
    const [form] = Form.useForm<ICategoryPutRequest>();
    const navigation = useNavigate();
    const onFinish = async (values: ICategoryPutRequest) => {
        try {
            const category = await updateCategory({...values, id: Number(id)}).unwrap();
            console.log("Update category", category);
            navigation("/categories");

            notification.success({
                message: 'Категорія змінена:',
                description: 'Категорія успішно змінена!',
            });
            window.location.reload();
        } catch (err) {
            console.error("Помилка редагування категорії:", err);
            notification.error({
                message: 'Помилка редагування категорії',
                description: 'Щось пішло не так, спробуйте ще раз.',
            });
        }
    };
    if (isLoading) return <div>Loading category...</div>;
    if (isError) return <div>Error loading category.</div>;
    return (
        <div style={{maxWidth: '400px', margin: '0 auto'}}>
            <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 my-6">
                Зміна категорії
            </h1>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    name: category?.name,
                    slug: category?.slug,
                    description: category?.description || '',
                }}
            >
                <Item
                    name="name"
                    label="Назва категорії"
                    rules={[
                        {required: true, message: 'Будь ласка, введіть назву категорії!'},
                        {min: 1, max: 150, message: 'Назва має бути від 1 до 150 символів'},
                    ]}
                >
                    <Input placeholder="Назва"/>
                </Item>
                <Item
                    name="slug"
                    label="Slug"
                    rules={[
                        {required: true, message: 'Будь ласка, введіть slug категорії!'},
                        {min: 1, max: 150, message: 'slug має бути від 1 до 150 символів'},
                    ]}
                >
                    <Input placeholder="Slug"/>
                </Item>
                <Item
                    name="description"
                    label="Вкажіть опис"
                >
                    <TextArea
                        rows={4}
                        placeholder="Текст..."
                    />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" block>
                        Оновити категорію
                    </Button>
                </Item>
            </Form>
        </div>
    );
};
export default EditCategoryPage;