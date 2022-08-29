import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
 Center,Heading,
  Flex,
  


} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Nav() {
  return (<>
    <Center mb="3em"><Heading bg='teal.600' bgClip='text'>Social App <br></br>( Nodejs, Express, Graphql, MongoDb, React, ChakraUi)</Heading></Center>
    <Flex ml="6em" color="teal.600" fontWeight="bold" mb={6} fontSize="2xl">
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} mr='12rem'>
  <BreadcrumbItem>
   <Link to="/">Social app</Link>
  </BreadcrumbItem>

  <BreadcrumbItem>
                <Link to='new'>Add User</Link>
                
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'></BreadcrumbLink>
  </BreadcrumbItem>
  </Breadcrumb>
  </Flex></>
  )
}
