import { Button, Form, Input, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignupPayload } from '../../../interfaces/auth.interfaces'
import { resetSignup, signup } from '../../../service/app/auth'
import { State } from '../../../types'
import Layout from '../Layout'

const Signup = () => {
    const dispatch = useDispatch()
    const auth = useSelector<State.AppState, State.AuthState>((state) => state.auth)
    const [form] = Form.useForm()
    const onFinish = (value: SignupPayload) => {
        dispatch(signup(value))
    }
    // 注册成功 清空表单
    useEffect(() => {
        if(auth.signup.loaded && auth.signup.success) {
            form.resetFields()
        }
    }, [auth])
    // 注册成功 显示成功的提示信息
    const showSuccess = () => {
        if(auth.signup.loaded && auth.signup.success) {
            return (
                <Result
                    status="success"
                    title="注册成功"
                    extra={[
                        <Button type='primary'>
                            <Link to="/signin"></Link>
                        </Button>
                    ]}
                />
            )
        }
    }
    // 注册失败 显示失败的提示信息
    const showError = () => {
        if(auth.signup.loaded && !auth.signup.success) {
            return (
                <Result
                    status="warning"
                    title="注册失败"
                    subTitle={auth.signup.message}
                />
            )
        }
    }
    // 离开页面 重置状态
    useEffect(() => {
        return () => {
            dispatch(resetSignup())
        }
    }, [])

    // 注册表单
    const signupForm = () => {
        return (
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="name" label="昵称">
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>注册</Button>
                </Form.Item>
            </Form>
        )
    }
    
    return (
        <Layout title='注册' subTitle=''>
            {showSuccess()}
            {showError()}
            {signupForm()}
        </Layout>
    )
}

export default Signup