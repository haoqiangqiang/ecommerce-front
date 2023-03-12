import { Button, Form, Input, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addCategory } from '../../../service/app/category'
import Layout from '../../core/Layout'

const AddCategory = () => {

    const [name, setName] = useState<string>('')

    useEffect(() => {
        const addCateGory = async () => {
            try {
                let response = await addCategory(name)
                message.success(`[${response.data.name}] 分类添加成功！`)
            } catch (error: any) {
                message.error(error.response.data.error)
            }
        }
        name && addCateGory()
    }, [name])

    const onFinish = (value: { name: string }) => {
        setName(value.name)
    }


    return (
        <Layout title="addCategory" subTitle=''>
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
            <Button><Link to="/admin/dashboard">返回 Dashboard</Link></Button>
        </Layout>
    )
}

export default AddCategory
