import { Button, Col, Divider, Form, Input, Row, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../../service/app/category'
import { searchProduct } from '../../../service/app/product'
import { State } from '../../../types'
import ProductItem from '../ProductItem'

const Search = () => {
    const dispatch = useDispatch()

    const { category } = useSelector<State.AppState, State.CategoryState>(state => state.category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onFinish = (value: { category: string, search: string }) => {
        dispatch(searchProduct({ category: value.category, search: value.search }))
    }
    return (
        <>
            <Form onFinish={onFinish} layout='inline' initialValues={{ category: 'All' }}>
                <Input.Group compact>
                    <Form.Item name="category">
                        <Select>
                            <Select.Option value='All'>所有分类</Select.Option>
                            {
                                category.result.map(item => (
                                    <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item name="search">
                        <Input placeholder='请输入搜索关键字' />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>搜索</Button>
                    </Form.Item>
                </Input.Group>
            </Form>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span="6">
                    {/* <ProductItem></ProductItem> */}
                </Col>
            </Row>
        </>
    )
}

export default Search