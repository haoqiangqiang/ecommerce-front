interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

declare namespace State {
    export interface AppState {
        router: RouterState
    }
}