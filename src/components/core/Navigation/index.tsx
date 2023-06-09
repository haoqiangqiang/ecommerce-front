import React, { useContext, useEffect } from 'react'
import { Badge, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RouterState } from 'connected-react-router'
import { isAuth } from '../../../service/app/auth'
import { AuthData } from '../../../interfaces/auth.interfaces'
import { State } from '../../../types'
import { TotalContext } from '../../../anotherStore'
import { itemCount } from '../../../service/app/cart'

const useActive = (currentPath: string, path: string): string => {
    return currentPath === path ? "ant-menu-item-selected" : ""
}

const Navigation = () => {
    const router = useSelector<State.AppState, RouterState>(state => state.router)
    const pathname = router.location.pathname
    const isHome = useActive(pathname, "/")
    const isShop = useActive(pathname, "/shop")
    const isSignin = useActive(pathname, "/signin")
    const isSignup = useActive(pathname, "/signup")
    const isCart = useActive(pathname, "/cart")
    const isDashboard = useActive(pathname, getDashboardUrl())

    const [count, setCount] = useContext(TotalContext)

    useEffect(() => {
        setCount(itemCount())
    })

    function getDashboardUrl() {
        let url = ""
        if (isAuth()) {
            const { user: { role } } = isAuth() as AuthData
            url = role ? '/admin/dashboard' : '/user/dashboard'
        }
        return url
    }
    return (
        <Menu mode='horizontal' selectable={false}>
            <Menu.Item className={isHome}>
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item className={isShop}>
                <Link to="/shop">商城</Link>
            </Menu.Item>
            <Menu.Item className={isCart}>
                <Link to='/cart'>
                    购物车
                    <Badge count={count} offset={[5, -10]}></Badge>
                </Link>
            </Menu.Item>
            {
                !isAuth() && (
                    <>
                        <Menu.Item className={isSignin}>
                            <Link to="/signin">登录</Link>
                        </Menu.Item>
                        <Menu.Item className={isSignup}>
                            <Link to="/signup">注册</Link>
                        </Menu.Item>
                    </>
                )
            }
            {
                isAuth() && (
                    <Menu.Item className={isDashboard}>
                        <Link to={getDashboardUrl()}>dashboard</Link>
                    </Menu.Item>
                )
            }
        </Menu>
    )
}

export default Navigation