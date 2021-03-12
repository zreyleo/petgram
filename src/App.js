import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              // eslint-disable-next-line operator-linebreak
              ?
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              // eslint-disable-next-line operator-linebreak
              :
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  )
}

export default App
