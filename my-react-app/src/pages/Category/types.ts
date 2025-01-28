export interface ICategoryItem {
    id: number;                  // Унікальний ідентифікатор категорії (можна додати якщо є поле 'id')
    name: string;                // Назва категорії
    slug: string;                // URL-ідентифікатор
    description?: string;        // Опис (може бути відсутній)
    created_at: string;          // Дата створення (тип для DateTime)
    updated_at: string;          // Дата оновлення (тип для DateTime)
}


export interface ICategoryPostRequest {
    name: string;         // Назва категорії (обов'язкове поле)
    slug: string;         // Унікальний ідентифікатор (обов'язкове поле)
    description?: string; // Опис (необов'язкове поле)
}

export interface ICategoryPutRequest extends Partial<ICategoryPostRequest> {
    id: number;
}