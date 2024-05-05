import React from 'react'
import {categoryList} from '../../../constants/'

import Accordian from '../shared/Accordian'

const DialogCategoryList = () => {
  return (

      <div >
        <h3  className='text-center'>Show category</h3>

        <Accordian listItem = {categoryList} hasImageIcon = {true} />
   
      </div>

   
  )
}

export default DialogCategoryList