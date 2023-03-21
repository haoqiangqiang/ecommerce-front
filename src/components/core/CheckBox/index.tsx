import React from 'react'
import { List, Typography, Checkbox as AntdCheckbox } from 'antd'

const { Title } = Typography

const categories = [{ name: 'Node' }, { name: 'Anguler' }]

const Checkbox = () => {
    return (
        <>
            <Title level={4}>按照分类筛选</Title>
            <List dataSource={categories} renderItem={Item => <List.Item><AntdCheckbox>{Item.name}</AntdCheckbox></List.Item>} />
        </>
    )
}

export default Checkbox