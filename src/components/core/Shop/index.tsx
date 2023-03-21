import React, { useEffect, useState } from 'react'
import { Col, Row, Space } from 'antd'
import Checkbox from '../CheckBox'
import Layout from '../Layout'
import RadioBox from '../RadioBox'


const Shop = () => {

    const [myFilters, setMyFilter] = useState<{ category: string[], price: number[] }>({ category: [], price: [] })

    useEffect(() => {
        console.log(myFilters)
    }, [myFilters])
    const filterDom = () => (
        <>
            <Space size="middle" direction='vertical'>
                <Checkbox handleFilter={(filters: string[]) => {
                    setMyFilter({ ...myFilters, category: filters })
                }} />
                <RadioBox handleFilter={(filters: number[]) => {
                    setMyFilter({ ...myFilters, price: filters })
                }}></RadioBox>
            </Space>
        </>
    )

    return <Layout title='Shop' subTitle='select it'>
        <Row>
            <Col span="4">{filterDom()}</Col>
            <Col span="20">right</Col>
        </Row>
    </Layout>
}

export default Shop