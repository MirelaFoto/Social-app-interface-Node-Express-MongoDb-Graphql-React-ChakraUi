import React from 'react'

import {
  Box,
  useColorModeValue,
  Center,
  Heading,

  Stack,
  Image,
} from '@chakra-ui/react';



function SmallCard (props) {

  const imageUrl='https://www.cyberlink.com/prog/learning-center/html/6430/PDR19-YouTube-160_Remove_Background/img/remove-background-from-an-image.jpg'
 
  return (
    
        <Center py={6}>
        <Box
          role={'group'}
          p={2}
          maxW={'130px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded='full'
          pos={'relative'}
          zIndex={1}>
          <Box
         
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'100px'}
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
            height='100%'
              width='100%'
              objectFit={'cover'}
              src={imageUrl}
            />
          </Box>
          <Stack pt={10} align={'center'}>
          <Heading fontSize="12px" fontFamily={'body'} fontWeight={500}mt='-3em' >
          {props.name}
          </Heading>
         
          </Stack>
        </Box>
      </Center>
       
  );

}

export default SmallCard;

