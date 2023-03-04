import React, { FC } from 'react'
import Navigation from '../Navigation'

const Layout: FC<Props> = ({ children }) => {
    return <div><Navigation></Navigation>{children}</div>
}

export default Layout