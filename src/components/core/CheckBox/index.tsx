import React, { FC, useEffect } from 'react'
import { List, Typography, Checkbox as AntdCheckbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../../service/app/category'
import { State } from '../../../types'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'

const { Title } = Typography

interface Props {
    handleFilter: (arg: string[]) => void
}

const Checkbox: FC<Props> = ({ handleFilter }) => {

    const dispatch = useDispatch()

    const category = useSelector<State.AppState, State.CategoryState>(state => state.category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onChange = (checkedValue: CheckboxValueType[]) => {
        handleFilter(checkedValue as string[])
    }

    return (
        <>
            <Title level={4}>按照分类筛选</Title>
            <AntdCheckbox.Group className='checkBoxFilter' options={category.category.result.map(item => ({
                label: item.name,
                value: item._id
            }))} onChange={onChange} />
        </>
    )
}

export default Checkbox