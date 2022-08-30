import { NavLink } from "react-router-dom";
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
    <Flex ml="6em" color="grey.200" fontWeight="bold" mb={6} fontSize="2xl">
<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} mr='12rem'>
  <BreadcrumbItem >
   
     <NavLink
     style={({ isActive }) => {
       return {
         display: "block",
         margin: "1rem 0",
         color: isActive ? "green" : "",
       };
     }} to="/">Social app</NavLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
  <NavLink
     style={({ isActive }) => {
       return {
         display: "block",
         margin: "1rem 0",
         color: isActive ? "green" : "",
       };
     }}  to='new'>Add User</NavLink>
                
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'></BreadcrumbLink>
  </BreadcrumbItem>
  </Breadcrumb>
  </Flex></>
  )
}
