import { Button } from 'antd'
import Axios from 'axios'
import react, { FC } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../config'
import { AuthData } from '../../../interfaces/auth.interfaces'
import { CartItem } from '../../../interfaces/cart.inerface'
import { isAuth } from '../../../service/app/auth'

interface Props {
    totalPrice: number,
    address: string,
    cart: CartItem[]
}

const Pay: FC<Props> = ({ totalPrice, address, cart }) => {

    const getPayUrl = () => {
        Axios.post(`${API}/alipay`, {
            totalAmount: totalPrice,
            subject: '测试订单标题',
            body: '测试订单描述',
            products: cart.map((product) => ({ count: product.count, product: product._id })),
            address,
            userId: (isAuth() as AuthData).user._id
        }).then(response => {
            location.href = response.data.result
        })
    }

    const showButton = () => {
        return isAuth() ? <Button onClick={getPayUrl}>提交订单</Button> : <Button><Link to='/signin'></Link>登录</Button>
    }
    return (
        <>{showButton()}</>
    )
}

export default Pay