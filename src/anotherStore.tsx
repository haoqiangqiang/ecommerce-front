import react, { Dispatch, FC, SetStateAction, useState } from 'react'
import { setContext } from 'redux-saga/effects'
import { itemCount } from './service/app/cart'

export const TotalContext = react.createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => null])

interface Props {
    children: React.ReactNode
}

const AnotherStore: FC<Props> = ({ children }) => {

    const [count, setCount] = useState(itemCount())

    return (
        <TotalContext.Provider value={[count, setCount]}>{children}</TotalContext.Provider>
    )
}

export default AnotherStore