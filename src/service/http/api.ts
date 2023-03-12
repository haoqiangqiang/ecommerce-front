import Axios, { AxiosResponse } from 'axios'
import { API } from '../../config'
import { AuthData } from '../../interfaces/auth.interfaces'
import { Category } from '../../interfaces/category.interface'
import { Response } from '../../interfaces/respose.interface'
import { isAuth } from '../app/auth'

const { user, token } = isAuth() as AuthData

export const AxiosIns = Axios.create({
    headers: {
        "Authorization": `Bearer ${token}` || ''
    }
})

export const createCategory = (category: string): Promise<AxiosResponse<Category>> => {
    return AxiosIns.post(`${API}/category/create/${user._id}`, { name: category })
}