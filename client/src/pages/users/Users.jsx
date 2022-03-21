import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import { Wrapper } from '../../styles/StyledComponents'
import Pagination from './Pagination'
import axios from 'axios'

const Users = () => {
    
    const [data, setData] = useState([])
    const currentPage = useState(1)
    const perPage = useState(6)

    useEffect( () => {
        const loadData = async () => {
            const response = await axios.get('http://localhost:5000/api/user/userlist', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setData(response.data.users)
            
        }
        loadData()
    }, [] )

    
    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    
    return (
        <Wrapper gridTemplateColumns={'5fr 1fr'}>
            <Wrapper gridTemplateRows={'1fr 60px'}>
                <Wrapper 
                    gridTemplateColumns={'1fr 1fr 1fr'} gridTemplateRows={'1fr 1fr'} 
                    gridColumnGap={'7%'} gridRowGap={'3%'}
                    margin={'1rem'}
                >
                        { data.slice(firstIndex, lastIndex).map( item => <UserCard user={item} key={item._id} /> ) }
                </Wrapper>

                <Wrapper>
                    <Pagination data={data} perPage={perPage} />
                </Wrapper>
            </Wrapper>

            <Wrapper border={'1px solid black'}>
                <h3>Filtering</h3>
            </Wrapper>
        </Wrapper>
    )
}

export default Users