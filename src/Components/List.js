import React, { useEffect, useState } from 'react'
import Search from './Search'

export default function List() {
    const [ data, setData ] = useState([])
    const [ searchName, setSearchName ] = useState('')
    const [ searchAge, setSearchAge ] = useState('')

    useEffect(() => {
       fetch('https://randomuser.me/api?results=50')
       .then(response => response.json())
       .then((data) => {
           setData(data.results)
           //setFiltred(data.results)
        })

    }, [])

    console.log(data)

    return (
        <div>
        <p>Name</p>
        <Search setSearchName={setSearchName}/>
        <p>Age</p>
        <Search setSearchAge={setSearchAge}/>
        {data.map((el) => {
           return (
               <p>{el.name.title} {el.name.first}</p>
               )
        })}

        </div>
    )
}
