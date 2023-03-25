import React from 'react'
import { Col, Menu, Row, Typography, Descriptions } from 'antd'
import { Link } from 'react-router-dom'
import {
    ShoppingCartOutlined,
    UserOutlined,
    OrderedListOutlined
} from '@ant-design/icons'
import Layout from '../../core/Layout'
import { isAuth } from '../../../service/app/auth'
import { AuthData } from '../../../interfaces/auth.interfaces'

const { Title } = Typography

const AdminDashboard = () => {
    const { user } = isAuth() as AuthData

    const adminLinks = () => (
        <>
            <Title level={5}>管理员链接</Title>
            <Menu>
                <Menu.Item>
                    <ShoppingCartOutlined />
                    <Link to="/create/category">添加分类</Link>
                </Menu.Item>
                <Menu.Item>
                    <UserOutlined />
                    <Link to="/create/product" >添加产品</Link>
                </Menu.Item>
                <Menu.Item>
                    <OrderedListOutlined />
                    <Link to="/admin/orders" >订单列表</Link>
                </Menu.Item>
            </Menu>
        </>
    )

    const adminInfo = () => (
        <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">{user.name}</Descriptions.Item>
            <Descriptions.Item label="邮件">{user.email}</Descriptions.Item>
            <Descriptions.Item label="角色">管理员</Descriptions.Item>
        </Descriptions>
    )
    return (
        < Layout title="Admin Dashboard" subTitle='' >
            <Row>
                <Col span="4">
                    {adminLinks()}
                </Col>
                <Col span="20">
                    {adminInfo()}
                </Col>
            </Row>
        </Layout >
    )
}

export default AdminDashboard