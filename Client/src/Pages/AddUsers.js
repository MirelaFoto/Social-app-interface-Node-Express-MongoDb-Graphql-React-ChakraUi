import React, { useState } from "react";
import { AddIcon } from '@chakra-ui/icons';
import { Heading, Input,Button, VStack, Center } from '@chakra-ui/react';
import { gql,  useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";



const ADD_USER= gql `
mutation myUser($id:ID!,$name:String!,$email:String!,$phone:String!){
  addUser(id:$id,name:$name, email:$email,phone:$phone){
    id
    name
   email
   phone
    
  }
 
}
`

 
 export default function AddUsers() {
  const [id] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ addUser, { called, error } ] = useMutation(ADD_USER);
  let navigate = useNavigate();

if(called) return <p>Session Submitted Successfully!</p>

if(error) return <p>Failed to submit session</p>

 function handleSubmit(e){
  e.preventDefault();
  addUser({
    variables:{
      id:id,
      name: name,
      email:email,
      phone:phone
    }
  });
  navigate("/", { replace: true });
}	


   return (
     <div>
  <form  onSubmit={handleSubmit}> 
         <Center mt="5em">
           <Heading  mb="1em">Form add User </Heading></Center>
           <VStack>
           <Input w ="50%" variant='filled' placeholder='name...'  type="text" onChange={(e)=>setName(e.target.value)}/>
           <Input  w ="50%" m="2em" variant='filled' placeholder='email...'  type="text" onChange={(e)=>setEmail(e.target.value)}/>
           <Input  w ="50%" m="2em" variant='filled' placeholder='phone...'  type="text" onChange={(e)=>setPhone(e.target.value)}/>    
           <Button colorScheme='teal' type='submit'>Add User <AddIcon /></Button>
           </VStack>
                 </form>
     </div>
   )
 }
