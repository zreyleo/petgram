import React from 'react'
import PropTypes from 'prop-types'
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
