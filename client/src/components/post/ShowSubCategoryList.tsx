import React from 'react'
import {subCategoryList} from '../../../constants/'
import Link from 'next/link';
type subCategoryListProps = {
    
    categoryItem:number

  };

const ShowSubCategoryList = ({categoryItem}:subCategoryListProps) => {
    const subCategory = subCategoryList.find(item => item.id === categoryItem)

  return (
    <ul>
      {subCategory?.items.map((item)=> {
        return <li className='p-2 link '>
            <Link href="#">{item}</Link>
          
          </li>
      })}
    </ul>
  )
}

export default ShowSubCategoryList