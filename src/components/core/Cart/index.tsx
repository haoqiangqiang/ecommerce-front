import { Col, Divider, Input, Row } from 'antd'
import react, { ChangeEvent, useEffect, useState } from 'react'
import { CartItem } from '../../../interfaces/cart.inerface'
import { getCart } from '../../../service/app/cart'
import CartItemFC from '../CartItem'
import Layout from '../Layout'
import Pay from '../Pay'
import TotalPrice from '../TotalPrice'

const Cart = () => {

    const [cart, setCart] = useState<CartItem[]>()

    const [address, setAddress] = useState<string>('')

    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        setCart(getCart())
    }, [])

    const showCart = () => {
        return (
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
                        <CartItemFC setCart={setCart} product={item}></CartItemFC>
                    ))}
                </tbody>
            </table>
        )
    }

    return (
        <Layout title='Cart' subTitle='add me'>
            <Row gutter={16}>
                <Col span='16'>{showCart()}</Col>
                <Col span='8'>
                    <Row>
                        <Input placeholder='请输入收货地址' value={address} onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)} />
                    </Row>
                    <Divider />
                    <Row>
                        <TotalPrice cart={cart!} setTotalPrice={setTotalPrice} />
                    </Row>
                    <Row>
                        <Pay />
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default Cart