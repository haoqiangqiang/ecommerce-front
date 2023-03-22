import Layout from '../Layout'
import react from 'react'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'

const Product = () => {

    const { productId } = useParams<{ productId: string }>()
    return (
        <Layout title='商品名称' subTitle="商品描述">
            <Row gutter={36}>
                <Col span="18">left</Col>
                <Col span="6">right</Col>
            </Row>
        </Layout>
    )
}

export default Product