import { Button } from 'antd'
import react from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../../../service/app/auth'

const Pay = () => {

    const showButton = () => {
        return isAuth() ? <Button>提交订单</Button> : <Button><Link to='/signin'></Link>登录</Button>
    }
    return (
        <>{showButton()}</>
    )
}

export default Pay