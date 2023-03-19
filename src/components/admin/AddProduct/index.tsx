import React, { useEffect } from 'react'
import { Button, Form, Input, Select, Upload } from 'antd'
import {
    UploadOutlined
} from '@ant-design/icons'
import Layout from '../../core/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../../service/app/category'
import { State } from '../../../types'

const AddProduct = () => {

    const dispatch = useDispatch()

    const category = useSelector<State.AppState, State.CategoryState>(state => state.category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    return (
        <Layout title='addProduct' subTitle=''>
            <Form initialValues={{ category: "" }}>
                <Form.Item>
                    <Upload>
                        <Button icon={<UploadOutlined />}>上传商品封面</Button>
                    </Upload>
                </Form.Item>
                <Form.Item name="name" label="商品名称">
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="商品描述">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="商品价格">
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="所属分类">
                    <Select>
                        <Select.Option value="">请选择分类</Select.Option>
                        {
                            category.category.result.map(item => (

                                <Select.Option value={item._id}>{item.name}</Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="quantity" label="商品数量">
                    <Input />
                </Form.Item>
                <Form.Item name="shipping" label="是否需要运输">
                    <Select>
                        <Select.Option value="1">是</Select.Option>
                        <Select.Option value="0">否</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>添加商品</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default AddProduct