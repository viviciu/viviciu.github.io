import { appleImg } from '../../public/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    // doing height 0 allows the nav to be sticky and not take up space.. so it overlays the canvas as if the position was absolute.
    <div className='lg:px-0 px-8 sticky top-0 z-10 w-full h-0 lg:leading-normal leading-relaxed'>  
      <nav className='grid 
      lg:grid-cols-5
      gap-5 w-full
      grid-cols-3 h-fit'>
        <div className='col-start-1 justify-self-end uppercase'>
          {/* Apple logo if you wanted to throw in a logo i guess */}
          {/* <Image src={appleImg} /> */}
          <Link 
          href='/'>staicu, viviana</Link>
        </div>
        
        <div className='lg:col-start-4 col-start-3'>
          {['play', 'theSketchbook', 'blogs'].map((item, index, array) => (
            // The React.Fragment is used to group the elements together without adding an extra node to the DOM. The key prop is moved to the React.Fragment because keys should be on the outermost element returned by map.
            <React.Fragment key={item}>
              <Link 
              href={'/' + item} // you can combine strings like this 
              className='hover:text-white hover:underline'>
                {item}
              </Link>
              {index < array.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar