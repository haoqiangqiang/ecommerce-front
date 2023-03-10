import PageHeader from 'antd/lib/page-header'
import React, { FC } from 'react'
import Navigation from '../Navigation'

const Layout: FC<Props> = ({ children, title, subTitle }) => {
    return (
        <div>
            <Navigation></Navigation>
            <PageHeader className='jumbotron' title={title} subTitle={subTitle}></PageHeader>
            <div style={{ width: "85%", margin: "0 auto" }}>
                {children}
            </div>
        </div >
    )
}

export default Layout