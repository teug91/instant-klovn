import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import Helmet from 'react-helmet'
import { node } from 'prop-types'

const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        min-height: 100vh;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    }
`

const Content = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = styled.main`
    margin: auto 0;
`

const Head = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Instant Klovn</title>
    </Helmet>
)

export const Layout = ({ children }) => (
    <>
        <Head />
        <BodyStyle />
        <Content>
            <Header />
            <Main>{children}</Main>
        </Content>
    </>
)

Layout.propTypes = {
    children: node,
}
