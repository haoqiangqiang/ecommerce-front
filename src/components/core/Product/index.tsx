import Layout from '../Layout'
import react, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../../service/app/product'
import { State } from '../../../types'
import ProductItem from '../ProductItem'

const Product = () => {

    const dispatch = useDispatch()

    const { product } = useSelector<State.AppState, State.ProductState>(state => state.product)

    const { productId } = useParams<{ productId: string }>()

    useEffect(() => {
        dispatch(getProductById({ productId }))
    }, [])

    return (
        <Layout title='商品名称' subTitle="商品描述">
            <Row gutter={36}>
                <Col span="18">
                    <ProductItem product={product.result} showViewProduct={false}></ProductItem>
                </Col>
                <Col span="6">right</Col>
            </Row>
        </Layout>
    )
}

export default Product