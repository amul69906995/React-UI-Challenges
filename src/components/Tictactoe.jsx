import React, { useEffect, useState } from 'react'

const Tictactoe = () => {
  const [square, setSquare] = useState(Array(9).fill(''))
  const [selectedPlayer, setSelectedPlayer] = useState('*')
  const [playerWon,setPlayerWon]=useState('')
  const handleClick = (i) => {

    if (!square[i]) {
      setSquare([...square.slice(0, i), selectedPlayer, ...square.slice(i + 1)])

    }
    if (selectedPlayer === '*') setSelectedPlayer('o')
      else setSelectedPlayer('*')
    
  }
const winningIndexes=[
  [0,4,8],
  [2,4,6],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
  useEffect(() => {

   if(!playerWon){
    
    for(let winningIndex of winningIndexes ){
      if(square[winningIndex[0]] && square[winningIndex[0]]===square[winningIndex[1]] && square[winningIndex[1]]===square[winningIndex[2]]){
        setPlayerWon(selectedPlayer)
      }
    }
      
  }
   
  }, [square])



  if(playerWon){

    return (
    <>
    <div>player {playerWon==='*'?'o':'*'} won</div>
   <button onClick={() =>{ setSquare(Array(9).fill(null)) ; setPlayerWon('');setSelectedPlayer('*')}}>Restart</button>
   </>
  )
  }
else{
  return (
    <>
      <div style={{ width: '160px', display: 'flex', flexWrap: 'wrap' }}>
        {square.map((e, i) => (<div
          onClick={() => handleClick(i)}
          key={i}
          style={{ width: '50px', height: '50px', border: '2px solid green' }}
        >{square[i]}</div>))}
      </div>
      <div>
        <button onClick={() => setSelectedPlayer('*')}>player(*)</button>
        <button onClick={() => setSelectedPlayer('o')}>player(o)</button>
        <button onClick={() => setSquare(Array(9).fill(null))}>Restart</button>
        <div>current player {selectedPlayer}</div>
      </div>
    </>
  )
}
}

export default Tictactoe;
