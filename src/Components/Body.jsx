import React from 'react'
import Seconday from '../Seconday'
import Primaybutton from '../Primaybutton'
import Cards from './Cards'


const Body = () => {
  return (
    <div>
      <div className='bg-red-300 py-10 text-center text-white'>
      
      <Seconday/>
      <Seconday color={'bg-gold-200'} name={',segun'}/>
      <Primaybutton/>
      <Primaybutton/>
    </div>
    <div className='flex gap-3 justify-center'>
     <Cards
      color={'bg-orange-400'}
      qouteTitle={'Disc'}
      quote={'fjdbjfbhfdbubyudbufd fdbbufdbyudfyuihuhu yuyohboybyuyyu bhhbyubibii'}
      quoteAuthor={'Jame'}
     />
    </div>
    </div>
  )
}

export default Body
