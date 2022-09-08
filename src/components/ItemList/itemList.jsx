import Item from '../Item/item'
import React from 'react'

export const ItemList = ({data = []}) => {
  return (
    data.map(FunkoFile => <Item key={FunkoFile.id}  dato={FunkoFile} />)
    )
}

export default ItemList;