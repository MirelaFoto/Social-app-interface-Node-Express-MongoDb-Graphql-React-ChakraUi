
import { AddIcon } from '@chakra-ui/icons';
import { Heading, Input,Button, VStack, Center } from '@chakra-ui/react';
import{gql} from 'apollo-boost'

// const addMovie = gql `
// mutation myMovie($name:String!,$genre:String!,year:String!){
//   addMovie(name:$name, genre:$genre,year:$year){
//     name
//     genre
//     year
//   }
// }
// `
const submitHandler=(event)=>{
   event.preventDefault();
  
}

 
 export default function AddUsers() {
   return (
     <div>
          <form
          onSubmit={submitHandler}> 
         <Center mt="5em">
           <Heading  mb="1em">Form add User </Heading></Center>
           <VStack>
           <Input w ="50%" variant='filled' placeholder='name...'  type="text" onChange={(e)=>console.log(e.target.value)}/>
           <Input  w ="50%" m="2em" variant='filled' placeholder='email...'  type="text" onChange={(e)=>console.log(e.target.value)}/>
           <Input  w ="50%" m="2em" variant='filled' placeholder='phone...'  type="text" onChange={(e)=>console.log(e.target.value)}/>    
           <Button colorScheme='teal'>Add <AddIcon /></Button>
           </VStack>
                 </form>
     </div>
   )
 }
