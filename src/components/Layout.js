import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import Helmet from 'react-helmet'

const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        min-height: 100vh;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    }
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 64px;
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
        <Header />
        <Main>{children}</Main>
    </>
)
