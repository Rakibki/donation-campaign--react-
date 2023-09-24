import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CardDetails = () => {
    const items = useLoaderData()
    const {id} = useParams()
    const item = items?.find((card) => card.id == id)
    console.log(item);

    return (
        <div>
            df
        </div>
  )
}

export default CardDetails