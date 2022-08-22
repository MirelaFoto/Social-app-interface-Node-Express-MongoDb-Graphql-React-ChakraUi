import React from 'react'
import { Button } from '@chakra-ui/react'


export default function ButtonChips(props) {
  return (
    <Button colorScheme='gray' rounded='40%' m='5px'>{props.children} </Button>
  )
}
