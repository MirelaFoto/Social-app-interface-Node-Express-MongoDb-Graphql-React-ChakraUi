import { Button, Flex, Heading } from '@chakra-ui/react';
import React, {useContext} from 'react';
import Users from '../components/Users';
import {UserContext} from '../Store/store';



const ArchivedListItems = () => {
    const {state, dispatch } = useContext(UserContext)
    // console.log(state)
    // console.log(dispatch)
    const {favoritesList} = state;
    console.log(favoritesList)

    return (
        <div  ><Heading>Archived List</Heading>

            {favoritesList.map((item)=> (
               <Flex key={item.id}>
                 <Users
   id={item.id}
  name={item.name}
  email={item.email}
 phone={item.phone}
 
   
  ></Users> 
                        <Button onClick={() => dispatch({type:'DELETE_FAV', payload: item.id})}>Remove</Button>
                </Flex>
            ))}
        </div>
    )
};

export default  ArchivedListItems;