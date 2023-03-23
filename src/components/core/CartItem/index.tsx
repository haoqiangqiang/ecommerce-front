import React, { ChangeEvent, FC, useState } from 'react'
import { CartItem } from '../../../interfaces/cart.inerface'
import { Button, Image, Input } from 'antd'
import { API } from '../../../config'
import { deleteItem, updateItem } from '../../../service/app/cart'

interface Props {
    product: CartItem,
    setCart: (arg: CartItem[]) => void
}

const CartItemFC: FC<Props> = ({ product, setCart }) => {

    const [count, setCount] = useState<number>(product.count)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let count = parseInt(event.target.value)
        setCart(updateItem(product._id, count)!)
        setCount(count)
    }

    return (
        <tr className='ant-table-roe'>
            <td className='ant-table-cell'>
                <Image width={120} src={`${API}/product/phtot/photo/${product._id}`} />
            </td>
            <td className='ant-table-cell'>{product.name}</td>
            <td className='ant-table-cell'>{product.price}</td>
            <td className='ant-table-cell'>{product.category.name}</td>
            <td className='ant-table-cell'>
                <Input type='number' value={product.count} onChange={handleChange} />
            </td>
            <td className='ant-table-cell'>
                <Button danger type='primary' onClick={() => setCart(deleteItem(product._id)!)} >删除</Button>
            </td>
        </tr>
    )
}

export default CartItemFC