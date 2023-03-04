import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../Layout'

const Home = () => {
    const state = useSelector(state => state)
    console.log('state', state)
    return <Layout title='Home' subTitle='enjoy it'>Home</Layout>
}

export default Home