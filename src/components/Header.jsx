import React from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Button, Heading } from '@chakra-ui/react'
import bgImage from "../images/bmw-m8.jpg"

export default function Header() {
  return (
    <Box 
    h='37vh'
    bg='gay'
    bgImage={`url(${bgImage})`}
    bgSize='cover'
    bgRepeat='no-repeat'
    >

    <Flex 
    direction='column'
    p={['0 10%', null, '0 20%']}
    alignItems='center'
    justify='center'
    h='100%'
    bg='rgb(0 0 0 / 15%)'
    >

    <Heading
    color='white'
    textTransform='uppercase'
    textAlign='center'
    fontWeight='light'
    letterSpacing='5px'
    >PLACER DE CONDUCIR</Heading>

    <Stack 
    mt='35px'
    spacing='40px'
    w={['100%', null, 'auto']}
    direction={{base: 'column', md: 'row'}}
    >

    <Button 
    variant="outline"
    size='lg'
    textTransform='uppercase'
    fontWeight='light'
    borderRadius='0'
    color='white'
    letterSpacing='1px'
    _hover={{color: 'black',
    bg: 'white'}}
    >VER DETALLES</Button>

    <Button 
    variant="outline"
    size='lg'
    textTransform='uppercase'
    fontWeight='light'
    borderRadius='0'
    color='white'
    letterSpacing='1px'
    _hover={{color: 'black',
    bg: 'white'}}
    >VER VIDEO</Button>

    </Stack>
    </Flex>
    </Box>
  )
}