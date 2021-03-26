import React from 'react'
import { Link, Grid, Image } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
                favs.map(fav => <Link to={`/detail/${fav.id}`} key={fav.id}>
                  <Image src={fav.src} />
                </Link>)
            }
    </Grid>
  )
}
