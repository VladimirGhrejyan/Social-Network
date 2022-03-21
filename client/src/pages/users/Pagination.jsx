import React from 'react'
import { PaginationItem } from '../../styles/StyledComponents'

const Pagination = ({data, perPage}) => {
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul>
            {
                pageNumbers.map( page => (
                    <PaginationItem key={page}>
                        {page}
                    </PaginationItem>
                ) )
            }
        </ul>
    )
}

export default Pagination