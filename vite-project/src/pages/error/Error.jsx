import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div className='flex justify-center mt-24'>
        <div>
            <h2 className='text-2xl mb-2 font-semibold'>Opps!!!</h2>
            <p>{error?.statusText}</p>
        </div>
    </div>
  )
}

export default Error