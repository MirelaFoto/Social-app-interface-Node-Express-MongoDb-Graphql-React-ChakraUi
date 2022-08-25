import { useState,forwardRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import Pagination from "@choc-ui/paginator";
import { Link } from "react-router-dom";
import { Flex ,Button, Heading, Container} from "@chakra-ui/react";
import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SmallCard from '../components/SmallUsers';
import ButtonContainer from './ButtonContainer';

const allUsers = gql`

  query allUsers {  
    users{     
      name
     
    }
  }

`;


function SmallCardContainer() {

//////

const [current, setCurrent] = useState(1);
 const pageSize = 10;
 const offset = (current - 1) * pageSize;

const el= forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
    .
  </Button>));
const Prev = forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
   <ChevronLeftIcon/>
   <ChevronLeftIcon/>
  </Button>
));
const Next = forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
    <ChevronRightIcon/>
    <ChevronRightIcon/>
  </Button>
));
const itemRender = (_, type) => {
  if (type === "prev") {
    return Prev;
  }
  if (type === "next") {
    return Next;
  }else{
    return  el;
  }
};

  ///////
  

  const { loading, error, data } = useQuery(allUsers)

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;
  const posts = data.users.slice(offset, offset + pageSize);
  return (

    <> <Container maxW='90%' >
      <Heading >All users</Heading>

      <ButtonContainer />
    
    
    <Pagination
            current={current}
            onChange={(page) => {
              setCurrent(page);
              
            }}
            pageSize={pageSize}
            total={data.users.length}
            itemRender={itemRender}
            paginationProps={{
              display: "flex",
              pos: "absolute",
              left: "70%",
              transform: "translateX(-50%)"
            }}
            colorScheme="teal"
            focusRing="teal"
          />
    <Flex mt='2em'flexDir="row" flexWrap="no-wrap" gap={8}>
    <Link to='/new'> <Button h='100px' w='100px' rounded='full' bg='teal' mt='3em'><AddIcon></AddIcon></Button></Link> 
     
    {posts.map((user,i)=> {
      return (
  <SmallCard 
  key={i}
  name={user.name}
  
  ></SmallCard>)
  
  
})

    }
     
     </Flex>
     </Container>
    </>
  )
}


 export default  SmallCardContainer;
 