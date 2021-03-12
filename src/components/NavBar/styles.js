import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
    display: flex;
    height: 50px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    max-width: 500px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    left: 0;
    right: 0;
`

export const Link = styled(LinkRouter)`
    display: inline-flex;
    height: 100%;
    text-decoration: none;
    width: 100%
    justify-content: center;
    align-items: center;
    color: #888;
`
