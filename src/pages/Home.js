import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>PetGram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con PetGram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, nextProps) => {
  return prevProps.categoryId !== nextProps.categoryId
})
