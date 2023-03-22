import { Category } from "../interfaces/category.interface"
import { Product } from "../interfaces/product.interface"

interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

declare namespace State {
    export interface AppState {
        router: RouterState,
        auth: AuthState,
        category: CategoryState,
        product: ProductState
    }
    export interface AuthState {
        signup: {
            loaded: boolean,
            success: boolean,
            message: string
        },
        signin: {
            loaded: boolean,
            success: boolean,
            message: string
        }
    }

    export interface CategoryState {
        category: {
            loaded: boolean,
            success: boolean,
            result: Category[]
        }
    }

    export interface ProductState {
        createdAt: {
            loaded: boolean,
            success: boolean,
            products: Product[],
        }
        sold: {
            loaded: boolean,
            success: boolean,
            products: Product[]
        },
        search: Product[],
        filter: {
            loaded: boolean,
            suceess: boolean,
            result: {
                size: number,
                data: Product[]
            }
        }
    }
}