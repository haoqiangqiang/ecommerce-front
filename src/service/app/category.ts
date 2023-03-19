import { Category, GetCategoryAction, GetCategorySucessAction } from '../../interfaces/category.interface'
import { CategoryActions } from '../../store/actions'
import { createCategory } from '../http/api'

export const addCategory = (category: string) => {
    return createCategory(category)
}

export const getCategory = (): GetCategoryAction => ({
    type: CategoryActions.GetCategory
})

export const getCategorySucess = (payload: Category[]): GetCategorySucessAction => ({
    type: CategoryActions.GetCategorySucess,
    payload
})