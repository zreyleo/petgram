import React, { useEffect, useState } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

import { categories as mockCategories } from '../../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState(mockCategories)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-backend-rele.vercel.app/categories')
      .then(response => response.json())
      .then(result => {
        setCategories(result)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {
          loading
            ? <Item><Category /></Item>
            : categories.map(category => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
