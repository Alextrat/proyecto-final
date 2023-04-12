import React from 'react'
import GalleryComponent from '../../components/GalleryComponent/GalleryComponent'

export const GalleryPage = ({user}) => {
  return (
    <div>
        <GalleryComponent user={user}/>
    </div>
  )
}
