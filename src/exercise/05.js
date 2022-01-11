// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied


// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <Box size="small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: "pink", fontStyle: "italic"}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: "orange", fontStyle: "italic"}}>large orange box</Box>

function Box({size, ...otherProps}) {
  return <div className={`box box--${size}`.trim()} {...otherProps}/>
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
