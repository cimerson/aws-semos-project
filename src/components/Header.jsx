import React from 'react'
import { Link } from 'react-router'

import { Flex, Button, Heading, Spacer } from '@chakra-ui/react'


const Header = () => {
    return (
        <Flex as='nav' p='4' bg='gray.700' align='center' borderBottom='1px solid gray.100'>
            <Heading size='md'>My React App</Heading>
            <Spacer />
            <Flex gap='2'>
                <Button as={Link} to='/' variant='ghost'>Home</Button>
                <Button as={Link} to='/team' variant='ghost'>Team</Button>
                <Button as={Link} to='/thanks' variant='ghost'>Thanks</Button>
            </Flex>
        </Flex>
    )
}

export default Header