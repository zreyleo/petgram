import React from 'react'
import { Helmet } from 'react-helmet'
import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>PetGram - Tus favoritos</title>
        <meta name='description' content='Aquí puedes encontrar tus favoritos' />
      </Helmet>
      <h1>Favs</h1>
      <FavsWithQuery />
    </>
  )
}
