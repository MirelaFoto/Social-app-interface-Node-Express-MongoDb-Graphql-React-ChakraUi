import React from 'react'
import { StarIcon,ChatIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  useColorModeValue,
  Center,
  Heading,
  Text,
Stack,
  Image, Tooltip 
} from '@chakra-ui/react';



function BigCard (props) {

  const imageUrl='https://www.cyberlink.com/prog/learning-center/html/6430/PDR19-YouTube-160_Remove_Background/img/remove-background-from-an-image.jpg'
 
  return (
    
        <Center py={6}>
        <Box
          role={'group'}
          p={2}
          maxW={'250px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
           <Box float='right'> <PhoneIcon/> <ChatIcon/></Box>
          <Box
         
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'150px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
             
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>

            <Image
            bgColor='gray.200'
            mt='3em'
              rounded='full'
            height='80%'
              width='100%'
              objectFit={'cover'}
              src={imageUrl}
            />
          </Box>
          <Stack pt={10} align={'center'}>
          <Tooltip label="Archive!" aria-label='A tooltip'>
          <StarIcon/>
</Tooltip>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {props.name}
          </Heading>
          <Text>{props.email} </Text>
          <Text>{props.phone} </Text>
          </Stack>
        </Box>
      </Center>
       
  );

}

export default BigCard;

