import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
