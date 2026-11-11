import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-300 py-10 text-center text-white'>
      <h1>Header</h1>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/todo'>Todo</a></li>
            <li>
              <a href='/form'>Form</a>
              </li>
              <li><a href='/apisop'>API</a></li>
                <li><a href='/shoppingcart'>Shopping cart</a></li>
      </ul>
    </div>
  )
}

export default Header
