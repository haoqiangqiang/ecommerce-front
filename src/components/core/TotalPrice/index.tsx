import react, { FC, useEffect } from 'react'
import { CartItem } from '../../../interfaces/cart.inerface'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {
    cart: CartItem[],
    setTotalPrice: (price: number) => void
}

const TotalPrice: FC<Props> = ({ cart, setTotalPrice }) => {

    useEffect(() => {
        setTotalPrice(parseFloat(getTotalPrice()))
    }, [cart])

    const getTotalPrice = () => {
        return cart.reduce((currentValue, nextValue) => {
            return (currentValue += nextValue.price * nextValue.count)
        }, 0).toFixed(2)
    }

    return (
        <Title level={5}>商品总价： {getTotalPrice()}</Title>
    )
}

export default TotalPrice