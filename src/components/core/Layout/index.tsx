import PageHeader from 'antd/lib/page-header'
import React, { FC } from 'react'
import Navigation from '../Navigation'

const Layout: FC<Props> = ({ children, title, subTitle }) => {
    return (
        <div>
            <Navigation></Navigation>
            <PageHeader title={title} subTitle={subTitle}></PageHeader>
            {children}
        </div>
    )
}

export default Layout