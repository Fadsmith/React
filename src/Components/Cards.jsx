import React from 'react'

const Cards = ({qouteTitle,quote,quoteAuthor,color}) => {
  return (
    <div className='w-64 p-4 rounded '>
       <h1> {qouteTitle}</h1>
      <p> {quote}</p>
      <h2>{quoteAuthor}</h2>
    </div>
  )
}

export default Cards
