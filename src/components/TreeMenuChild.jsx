import React, { useState } from 'react'

const TreeMenuChild = ({nodeData,nodeLabel}) => {
    const [showChild,setShowChild]=useState(false)
    console.log(nodeData,showChild)
  return (
    <div>
    <li>
    <a href="">{nodeLabel}</a>
    <span onClick={()=>setShowChild(!showChild)}>{showChild&&nodeData?.length?'-':'+'}</span>
    <ul>
      {showChild&&nodeData&&nodeData.length>0&&nodeData.map((e,i)=><TreeMenuChild nodeLabel={e.label} key={i} nodeData={e.children}/>)}
</ul>
      </li>
    </div>
  )
}

export default TreeMenuChild
