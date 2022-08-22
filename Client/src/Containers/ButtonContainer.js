import { Center } from '@chakra-ui/react'
import React from 'react'
import Button from '../components/Button'

export default function ButtonContainer() {
  return (
    <>
<Button> <Center>All users</Center></Button>
<Button> <Center>Archived</Center></Button>
<Button> <Center>Online</Center></Button>
</>
  )
}
