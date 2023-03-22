import React, { useEffect, useState } from 'react'
import { Button, Col, Empty, Row, Space } from 'antd'
import Checkbox from '../CheckBox'
import Layout from '../Layout'
import RadioBox from '../RadioBox'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../../service/app/product'
import { State } from '../../../types'
import ProductItem from '../ProductItem'


const Shop = () => {

    const dispatch = useDispatch()

    const [skip, setSkip] = useState<number>(0)

    const [myFilters, setMyFilter] = useState<{ category: string[], price: number[] }>({ category: [], price: [] })

    useEffect(() => {
        setSkip(0)
    }, [myFilters])

    useEffect(() => {
        dispatch(filterProduct({ filters: myFilters, skip }))
    }, [myFilters, skip])

    const product = useSelector<State.AppState, State.ProductState>(state => state.product)
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

    const productDom = () => (
        <Row gutter={[16, 16]}>
            {
                product.filter.result.data.map(item => (
                    <Col key={item._id} span="6">
                        <ProductItem product={item}></ProductItem>
                    </Col>
                ))
            }
        </Row>
    )

    const loadMoreButton = () => {
        return (
            <Row>
                {
                    product.filter.result.size >= 4 && (<Button onClick={loadMore}>加载更多</Button>)
                }
            </Row>
        )
    }

    const loadMore = () => {
        setSkip(skip + 4)
    }

    const noData = () => {
        return (
            <Row>
                {product.filter.result.size === 0 && <Empty />}
            </Row>
        )
    }

    return <Layout title='Shop' subTitle='select it'>
        <Row>
            <Col span="4">{filterDom()}</Col>
            <Col span="20">{productDom()} {loadMoreButton()} {noData()}</Col>
        </Row>
    </Layout>
}

export default Shop