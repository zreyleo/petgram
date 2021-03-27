import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, SubTitle, Title } from './styles'

export const Layout = ({ children, title, subtitle }) => {
    return (
        <Fragment>
            <Helmet>
                {title && <title>{title} | Petgram 🐶</title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <SubTitle>{subtitle}</SubTitle>}
                {children}
            </Div>
        </Fragment>
    )
}