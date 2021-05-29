import React from 'react'

export default function Search({ setSearch }) {
    return (
        <div>
            <input type='search' name='search'  onChange={(e) => setSearch((e.target.value))}/>
        </div>
    )
}
