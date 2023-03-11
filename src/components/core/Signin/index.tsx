import React from 'react'
import { Button, Form, Input, Result } from 'antd'
import Layout from '../Layout'
import { AuthData, SigninPayload } from '../../../interfaces/auth.interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth, signin } from '../../../service/app/auth'
import { Redirect } from 'react-router-dom'

const Signin = () => {
    const dispatch = useDispatch()
    const onFinish = (value: SigninPayload) => {
        dispatch(signin(value))
    }
    // 获取登录结果
    const auth = useSelector<State.AppState, State.AuthState>(state => state.auth)
    // 登录失败 显示错误信息
    const showError = () => {
        if (auth.signin.loaded && !auth.signin.success) {
            return (
                <Result
                    status="warning"
                    title="登录失败"
                    subTitle={auth.signin.message}
                />
            )
        }
    }
    // 登录成功 根据角色跳转对应的管理页面
    const redirectToDashboard = () => {
        const auth = isAuth()
        if (auth) {
            const { user: { role } } = auth as AuthData
            return role ? <Redirect to="/admin/dashboard" /> : <Redirect to="/user/dashboard" />
        }
    }

    const signinForm = () => (
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
    )
    // 处理导航链接 已登录 隐藏
    return (
        <Layout title='登录' subTitle=''>
            {showError()}
            {redirectToDashboard()}
            {signinForm()}
        </Layout>
    )
}

export default Signin