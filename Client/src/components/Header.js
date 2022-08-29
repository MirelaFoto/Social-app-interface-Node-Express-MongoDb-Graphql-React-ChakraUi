
import { Link } from "react-router-dom";

import {
 
  Flex,



} from '@chakra-ui/react'
import { SearchIcon,AddIcon } from '@chakra-ui/icons'
import { Input,Container} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { useState } from "react";
import SmallCardContainer from "../Containers/SmallCardContainer";
import AllUsers from "../Containers/AllUsers";



export default function Header() {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState("");
  return (
<>

<Container maxW='90%' >
<Flex  >


  <SearchIcon mt='15px' color='gray.500'/>
  <Input type='search'
  onChange={(e) => setValue(e.target.value)}
  variant='filled' placeholder='Search....'w='30%'/>
  <Button colorScheme='teal' w='5%' ml='1em' onClick={()=>setSearch(value)} >Search</Button>
  
  <Link to='new' > <Button ml='20em' colorScheme='teal' w='25%' > <AddIcon w={6} h={6} />Add new</Button></Link>
 
  </Flex>
  </Container>
  <SmallCardContainer props={search}/>
  <AllUsers  props={search}/>
</>


  )
}
