import React from 'react'
import boxes from './boxes.js'
import Box from './components/Box.js'

function App() {

    const [squares, setSquares] = React.useState(boxes)

    const elementSquares = squares.map(square => (
      <Box key={square.id} id={square.id} on={square.on} toggle={()=>toggle(square.id)}/>
    ))
    
    function toggle(id){
      // ---------------
      // IMPERATIVE WAY
      // ---------------
        // setSquares(prevSquares => {
        //   const newSquares = []
        //   for (let i = 0; i < prevSquares.length; i++){
        //     const currentSquare = prevSquares[i]
        //     if (currentSquare.id === id){
        //       const updatedSquare ={
        //         ...currentSquare,
        //         on: !currentSquare.on
        //       }
        //       newSquares.push(updatedSquare)
        //     }else{
        //       newSquares.push(currentSquare)
        //     }
        //   }
        //   return newSquares
        // })
      // ---------------
      // DECLARATIVE WAY
      // ---------------
      setSquares(prevSquares => {
        return prevSquares.map(square => {
          return square.id === id ? {...square, on: !square.on} : square
        })
      })
      console.log(id)
  }

    return (
      <div>
        {elementSquares}
      </div>
    );
  }

export default App;
