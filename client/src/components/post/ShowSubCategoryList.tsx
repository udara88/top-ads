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
      {subCategory?.items.map((item:any)=> {
        return <li className='p-2 link '>
            <Link href={`/post-ad/create-ad?subcategoryid=${item.id}`}>{item.name}</Link>
          
          </li>
      })}
    </ul>
  )
}

export default ShowSubCategoryList