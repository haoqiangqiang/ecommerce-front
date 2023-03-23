import { Col, Row } from 'antd'
import react, { useEffect, useState } from 'react'
import { CartItem } from '../../../interfaces/cart.inerface'
import { getCart } from '../../../service/app/cart'
import CartItemFC from '../CartItem'
import Layout from '../Layout'

const Cart = () => {

    const [cart, setCart] = useState<CartItem[]>()

    useEffect(() => {
        setCart(getCart())
    }, [])

    const showCart = () => {
        <table style={{ width: "100%" }}>
            <thead className="ant-table-thead">
                <tr>
                    <th className="ant-table-cell">商品封面</th>
                    <th className="ant-table-cell">商品名称</th>
                    <th className="ant-table-cell">商品价格</th>
                    <th className="ant-table-cell">商品分类</th>
                    <th className="ant-table-cell">商品数量</th>
                    <th className="ant-table-cell">操作</th>
                </tr>
            </thead>
            <tbody className='ant-table-tbody'>
                {cart?.map(item => (
                    <CartItemFC product={item}></CartItemFC>
                ))}
            </tbody>
        </table>
    }

    return (
        <Layout title='Cart' subTitle='add me'>
            <Row gutter={16}>
                <Col span='16'></Col>
                <Col span='8'></Col>
            </Row>
        </Layout>
    )
}

export default Cart