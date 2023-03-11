import { createCategory } from '../http/api'
export const addCategory = (category: string) => {
    return createCategory(category)
}