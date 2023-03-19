import { Category } from "../interfaces/category.interface"

interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

declare namespace State {
    export interface AppState {
        router: RouterState,
        auth: AuthState,
        category: CategoryState
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
}