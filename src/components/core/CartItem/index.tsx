import React, { FC } from 'react'
import { CartItem } from '../../../interfaces/cart.inerface'
import { Button, Image, Input } from 'antd'
import { API } from '../../../config'

interface Props {
    product: CartItem
}

const CartItemFC: FC<Props> = ({ product }) => {
    return (
        <tr className='ant-table-roe'>
            <td className='ant-table-cell'>
                <Image width={120} src={`${API}/product/phtot/photo/${product._id}`} />
            </td>
            <td className='ant-table-cell'>{product.name}</td>
            <td className='ant-table-cell'>{product.price}</td>
            <td className='ant-table-cell'>{product.category.name}</td>
            <td className='ant-table-cell'>
                <Input type='number' value={product.count} />
            </td>
            <td className='ant-table-cell'>
                <Button danger type='primary'>删除</Button>
            </td>
        </tr>
    )
}

export default CartItemFC