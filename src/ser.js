
import React from 'react'
import { useEffect } from 'react'
import Api from './front/api'

export default function Ser() {
    useEffect(()=>{
        Api()
    },[])
  return (
    <div>ser</div>
  )
}
