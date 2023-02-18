import React, { Component } from 'react'

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <h1 className="flex flex-row justify-center my-6 ext-xl3 text-white bold ">Weather Forecast App</h1>
        <div className="flex flex-row justify-center my-6 ext-xl3 text-white font-light">
            
            <h2>Favourite City</h2>
        </div>
      </>
        
    )
  }
}

export default Header