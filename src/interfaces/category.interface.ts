import { CategoryActions } from '../store/actions'

export interface Category {
    _id: string,
    name: string
}

export interface GetCategoryAction {
    type: typeof CategoryActions.GetCategory
}

export interface GetCategorySucessAction {
    type: typeof CategoryActions.GetCategorySucess,
    payload: Category[]
}

export type CategoryUnionType = GetCategoryAction | GetCategorySucessAction