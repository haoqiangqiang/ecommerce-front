import React from 'react'
import { Col, Row, Space } from 'antd'
import Checkbox from '../CheckBox'
import Layout from '../Layout'
import RadioBox from '../RadioBox'

const filterDom = () => (
    <>
        <Space size="middle" direction='vertical'>
            <Checkbox></Checkbox>
            <RadioBox></RadioBox>
        </Space>
    </>
)

const Shop = () => {
    return <Layout title='Shop' subTitle='select it'>
        <Row>
            <Col span="4">{filterDom()}</Col>
            <Col span="20">right</Col>
        </Row>
    </Layout>
}

export default Shop