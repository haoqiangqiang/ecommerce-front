import { Button, Form, Input } from 'antd'
import React from 'react'
import Layout from '../../core/Layout'

const AddCategory = () => {
    const onFinish = (value: { name: string }) {
        console.log('name', value)
    }
    return <Layout title="addCategory" subTitle=''>
        <Form onFinish={onFinish}>
            <Form.Item name="name" label="分类名称">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    添加分类
                </Button>
            </Form.Item>
        </Form>
    </Layout>
}

export default AddCategory
