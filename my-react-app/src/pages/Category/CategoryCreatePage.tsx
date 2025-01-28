import React from "react";
import {Button, Form, Input, notification} from "antd";
import {ICategoryPostRequest} from "./types.ts";
import TextArea from "antd/es/input/TextArea";
import {useNavigate} from "react-router-dom";
import {useCreateCategoryMutation} from "../../services/apiCategory.ts";

const {Item} = Form;

const CategoryCreatePage: React.FC = () => {

    const [form] = Form.useForm<ICategoryPostRequest>();
    const navigate = useNavigate();
    const [createCategory] = useCreateCategoryMutation();
    //Знімає дані з форми
    const onFinish = async (values: ICategoryPostRequest) => {
        console.log("Send data server", values);
        try {
            const response = await createCategory(values).unwrap();

            console.log("Категорія успішно створена:", response);
            navigate("..");
            notification.success({
                message: 'Категорія створена :',
                description: 'Категорія успішно створена!',
            });
        } catch (error) {
            notification.error({
                message: 'Помилка редагування категорії',
                description: 'Щось пішло не так, спробуйте ще раз.',
            });
        }

    }

    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Додати категорію</h1>
            <div style={{maxWidth: '400px', margin: '0 auto'}}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout={"vertical"}>

                    <Item
                        name={"name"}
                        label={"Назва категорії"}
                        rules={[
                            {required: true, message: "Вкажіть назву категорії"}
                        ]}>
                        <Input placeholder={"Назва"}/>
                    </Item>

                    <Item
                        name={"slug"}
                        label={"Slug"}
                        rules={[
                            {required: true, message: "Вкажіть slug категорії"}
                        ]}>
                        <Input placeholder={"Slug"}/>
                    </Item>

                    <Item
                        name={"description"}
                        label={"Опис"}>
                        <TextArea placeholder={"Опис..."} rows={4}/>
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit">
                            Створити категорію
                        </Button>
                    </Item>

                </Form>
            </div>
        </>
    )
}

export default CategoryCreatePage;