import React from 'react'
import treeMenuData from '../seed/TreeMenuData.json'
import TreeMenuChild from './TreeMenuChild'
const TreeMenu = () => {
  
  return (
    <div>
    <ul>

      {treeMenuData.map((element, idx) => {
        return (<TreeMenuChild key={idx} nodeData={element.children} nodeLabel={element.label}/>)
      })}
      </ul>
    </div>
  )
}

export default TreeMenu
