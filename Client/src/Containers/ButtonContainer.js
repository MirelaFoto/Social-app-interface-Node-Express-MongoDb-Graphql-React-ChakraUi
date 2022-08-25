import { Center } from '@chakra-ui/react'

import Button from '../components/Button'
import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import {UserContext} from '../Store/store';

export default function ButtonContainer() {
  const {state} = useContext(UserContext)
  // console.log(state)
  const {favoritesList} = state;
  // console.log(favoritesList)
  return (
    <>
<Button> <Center>All users</Center></Button>
<Button > <Link to='/fave'><Center>Archived</Center></Link>
                <span>{favoritesList.length}</span> </Button>
<Button> <Center>Online</Center></Button>
</>
  )
}
