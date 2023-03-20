import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../service/app/product'
import Layout from '../Layout'
import ProductItem from '../ProductItem'
import Search from '../Search'

const { Title } = Typography

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct('createdAt'))
        dispatch(getProduct('sold'))
    }, [])

    return <Layout title='Home' subTitle='enjoy it'>
        <Search></Search>
        <Title level={5}>最新上架</Title>
        <Row gutter={[16, 16]}>
            <Col span="6">
                <ProductItem></ProductItem>
            </Col>
        </Row>
        <Title level={5}>最受欢迎</Title>
        <Row gutter={[16, 16]}>
            <Col span="6">
                <ProductItem></ProductItem>
            </Col>
        </Row>
    </Layout>
}

export default Home