interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

declare namespace State {
    export interface AppState {
        router: RouterState,
        auth: AuthState
    }
    export interface AuthState {
        signup: {
            loaded: boolean,
            success: boolean,
            message: string
        }
    }
}