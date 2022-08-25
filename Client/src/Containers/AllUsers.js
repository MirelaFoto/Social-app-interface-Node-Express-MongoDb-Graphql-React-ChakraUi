import { useState,forwardRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import Pagination from "@choc-ui/paginator";
import Users from '../components/Users';
import { Flex ,Button, Heading, Container} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export var allUsers = gql`

  query allUsers {  
    users{
      id
        name
       email
        phone
      }


  }

`;


function AllUsers() {
  const [current, setCurrent] = useState(1);

  
//////


const pageSize = 10;
const offset = (current - 1) * pageSize;
const { loading, error, data } = useQuery(allUsers)

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;
  const posts = data.users.slice(offset, offset + pageSize);


const Prev = forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
   <ChevronLeftIcon/>
  </Button>
));
const Next = forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
    <ChevronRightIcon/>
  </Button>
));
const itemRender = (_, type) => {
  if (type === "prev") {
    return Prev;
  }
  if (type === "next") {
    return Next;
  }
};

  ///////
  

 
  return (

    <Container maxW='90%' >
    <Heading>All users</Heading>
    <Flex flexDir="row" flexWrap="wrap" gap={8}>
     
    {posts.map((user,i)=> {
      return <div  key={i}>
  <Users
   id={user.id}
  name={user.name}
  email={user.email}
 phone={user.phone}
   
  ></Users> 
  </div>
})

    }
     
     </Flex>
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
              left: "30%",
              transform: "translateX(-50%)"
            }}
            colorScheme="teal"
            focusRing="green"
          />
    </Container>
  )
}


 export default  AllUsers;
 