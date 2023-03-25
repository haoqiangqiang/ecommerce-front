import { Button } from 'antd'
import react from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

const Success = () => {
    return <Layout title='Success' subTitle=''>
        <Button>
            <Link to='/'>继续购物</Link>
        </Button>
    </Layout>
}

export default Success