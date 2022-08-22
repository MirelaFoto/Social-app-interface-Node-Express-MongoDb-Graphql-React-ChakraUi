import React from 'react'
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Flex,
  Heading,


} from '@chakra-ui/react'
import { ChevronRightIcon,SearchIcon,AddIcon } from '@chakra-ui/icons'
import { Input,Container} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'



export default function Header() {
  return (
<><Center mb="3em"><Heading bg='teal.600' bgClip='text'>Social App <br></br>( Nodejs, Express, Graphql, MongoDb, React, ChakraUi)</Heading></Center>

<Container maxW='90%' >
<Flex  >
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} mr='12rem'>
  <BreadcrumbItem>
   <Link to="/">Social app</Link>
  </BreadcrumbItem>

  <BreadcrumbItem>
                <Link to='new'>Add User</Link>
                
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
  </Breadcrumb>

  <SearchIcon mt='15px' color='gray.500'/><Input variant='filled' placeholder='Search....'w='30%'/>
  <Button colorScheme='teal' w='5%' ml='1em' >Search</Button>
  <Link to='new' > <Button ml='20em' colorScheme='teal' w='25%' > <AddIcon w={6} h={6} />Add new</Button></Link>
  </Flex>
  </Container>
</>


  )
}
