import React from 'react'
import { Button, Form, Input } from 'antd'
import Layout from '../Layout'
import { SigninPayload } from '../../../interfaces/auth.interfaces'
import { useDispatch } from 'react-redux'
import { signin } from '../../../service/app/auth'

const Signin = () => {
    const dispatch = useDispatch()
    const onFinish = (value: SigninPayload) => {
        dispatch(signin(value))
    }
    return (
        <Layout title='登录' subTitle=''>
            <Form onFinish={onFinish}>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>登录</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Signin